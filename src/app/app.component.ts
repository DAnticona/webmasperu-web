import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

import { trigger, style, transition, animate, query, animateChild, group } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  suscription: Subscription;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.suscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scroll(0, 0));
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
