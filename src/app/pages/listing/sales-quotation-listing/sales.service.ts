import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { SalesQuotation } from './sales.model';
import { SALESQUOTATION } from './data';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

interface SearchResult {
  salesQuotations: SalesQuotation[];
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

function sort(salesQuotations: SalesQuotation[], column: SortColumn, direction: string): SalesQuotation[] {
  if (direction === '' || column === '') {
    return salesQuotations;
  } else {
    return [...salesQuotations].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(salesQuotations: SalesQuotation, term: string, pipe: PipeTransform) {
  return salesQuotations.quotation_no.toLowerCase().includes(term)
  // || salesQuotations.username.toLowerCase().includes(term.toLowerCase())
  // || salesQuotations.email.toLowerCase().includes(term)
  // || salesQuotations.date.toLowerCase().includes(term);
}

@Injectable({ providedIn: 'root' })
export class SalesQuotationService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _salesQuotations$ = new BehaviorSubject<SalesQuotation[]>([]);
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
      this._salesQuotations$.next(result.salesQuotations);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get salesQuotations$() { return this._salesQuotations$.asObservable(); }
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
    let salesQuotations = sort(SALESQUOTATION, sortColumn, sortDirection);

    // 2. filter
    salesQuotations = salesQuotations.filter(salesQuotation => matches(salesQuotation, searchTerm, this.pipe));
    const total = salesQuotations.length;

    // 3. paginate
    salesQuotations = salesQuotations.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ salesQuotations, total });
  }
}