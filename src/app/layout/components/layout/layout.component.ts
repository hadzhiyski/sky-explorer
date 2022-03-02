import { Component, OnInit } from '@angular/core';
import { asapScheduler, Observable, scheduled } from 'rxjs';

@Component({
  selector: 'sky-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  title = 'Sky Explorer';
  year = new Date().getFullYear();
  navigation$: Observable<any>;

  constructor() {
    // TODO Consider using service
    this.navigation$ = scheduled(
      [[{ label: 'Explorer', routerLink: ['explorer'] }]],
      asapScheduler
    );
  }
}
