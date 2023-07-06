import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-uservalidation></app-uservalidation>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'myapp';
}
