import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-myform></app-myform>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'myapp';
}
