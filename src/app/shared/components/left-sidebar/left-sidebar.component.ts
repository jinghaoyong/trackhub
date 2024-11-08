import { Component, OnInit, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, Input, OnChanges } from '@angular/core';
import MetisMenu from 'metismenujs';

import { Router, NavigationEnd } from '@angular/router';

// import { MENU } from 'src/app/layouts/sidebar/menu';
// import { MenuItem } from 'src/app/layouts/sidebar/menu.model';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from '../../../core/services/event.service';
import { DatePipe } from '@angular/common';
import { SideMenuItem } from 'src/app/core/interfaces/@type';
import { DATA_ROUTING } from 'src/app/core/constants/navigation-data';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSideBarComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isCondensed = false;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  menu: any;

  menuItems = [];
  @ViewChild('sideMenu') sideMenu: ElementRef;
  @ViewChild('componentRef') scrollRef;

  currentDateAndTime = "";

  constructor(private eventService: EventService, private router: Router, public translate: TranslateService, private datePipe: DatePipe) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
        this._scrollElement();
      }
    });    
  }

  ngOnInit() {
    this.initialize();
    this._scrollElement();
    // document.body.setAttribute('data-sidebar', 'light');

    this.getCurrentDateAndTime();
    // this.currentDateAndTime = this.datePipe.transform(new Date(), 'EEEE dd/MM/yyyy HH:mm:ss a');
    // document.getElementById("datetime").innerHTML = this.currentDateAndTime;
  }

  getCurrentDateAndTime() {
    setInterval(() => {
      this.currentDateAndTime = this.datePipe.transform(new Date(), 'EEEE dd/MM/yyyy hh:mm:ss a'); //set time variable with current date 
   }, 1000);
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Light sidebar
   */
  darkSidebar() {
    document.body.setAttribute('data-sidebar', 'dark');
    document.body.removeAttribute('data-sidebar-size');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.classList.remove('vertical-collpsed');
  }

  /**
   * Compact sidebar
   */
  compactSidebar() {    
    document.body.setAttribute('data-sidebar-size', 'small');
    document.body.setAttribute('data-sidebar', 'dark');
    document.body.removeAttribute('data-topbar');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.classList.remove('sidebar-enable');
    document.body.classList.remove('vertical-collpsed');
  }

  /**
   * Icon sidebar
   */
  iconSidebar() {
    document.body.classList.add('sidebar-enable');
    document.body.classList.add('vertical-collpsed');
    document.body.setAttribute('data-sidebar-size', 'sm');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.removeAttribute('data-topbar');
  }

  /**
   * Boxed layout
   */
  boxedLayout() {
    document.body.setAttribute('data-keep-enlarged', 'true');
    document.body.setAttribute('data-layout-size', 'boxed');
    document.body.setAttribute('data-sidebar', 'dark');
    document.body.classList.add('vertical-collpsed');
    document.body.classList.remove('sidebar-enable');
    document.body.removeAttribute('data-topbar');
  }

  /**
   * Colored sidebar
   */
  coloredSidebar() {
    document.body.setAttribute('data-sidebar', 'colored');
    document.body.removeAttribute('data-sidebar-size');
    document.body.removeAttribute('data-layout-size');
    document.body.classList.remove('vertical-collpsed');
    document.body.removeAttribute('data-topbar');
  }

  _scrollElement() {
    setTimeout(() => {
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
        if (currentPosition > 500)
        if(this.scrollRef.SimpleBar) {
          if (this.scrollRef.SimpleBar.getScrollElement() !== null) {
            this.scrollRef.SimpleBar.getScrollElement().scrollTop =
              currentPosition + 300;
          }
        }
      }
    }, 300);
  }
  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    const paths = [];
    for (let i = 0; i < links.length; i++) {
      paths.push(links[i]['pathname']);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) { childAnchor.classList.add('mm-active'); }
            if (childDropdown) { childDropdown.classList.add('mm-active'); }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') { childanchor.classList.add('mm-active'); }
              }
            }
          }
        }
      }
    }

  }

  /**
   * Initialize
   */
  initialize(): void {
    this.menuItems = DATA_ROUTING;
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: SideMenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
}
