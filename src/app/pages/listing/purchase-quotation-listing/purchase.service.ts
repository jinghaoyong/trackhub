import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { PurchaseQuotation } from './purchase.model';
import { PURCHASEQUOTATION } from './data';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

interface SearchResult {
  purchaseQuotations: PurchaseQuotation[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(purchaseQuotations: PurchaseQuotation[], column: SortColumn, direction: string): PurchaseQuotation[] {
  if (direction === '' || column === '') {
    return purchaseQuotations;
  } else {
    return [...purchaseQuotations].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(purchaseQuotations: PurchaseQuotation, term: string, pipe: PipeTransform) {
  return purchaseQuotations.quotation_no.toLowerCase().includes(term)
  // || purchaseQuotations.username.toLowerCase().includes(term.toLowerCase())
  // || purchaseQuotations.email.toLowerCase().includes(term)
  // || purchaseQuotations.date.toLowerCase().includes(term);
}

@Injectable({ providedIn: 'root' })
export class PurchaseQuotationService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _purchaseQuotations$ = new BehaviorSubject<PurchaseQuotation[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._purchaseQuotations$.next(result.purchaseQuotations);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get purchaseQuotations$() { return this._purchaseQuotations$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let purchaseQuotations = sort(PURCHASEQUOTATION, sortColumn, sortDirection);

    // 2. filter
    purchaseQuotations = purchaseQuotations.filter(purchaseQuotation => matches(purchaseQuotation, searchTerm, this.pipe));
    const total = purchaseQuotations.length;

    // 3. paginate
    purchaseQuotations = purchaseQuotations.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ purchaseQuotations, total });
  }
}