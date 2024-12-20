import { Component } from '@angular/core';

@Component({
  selector: 'a[port-href-link]',
  standalone: true,
  template: `<ng-content></ng-content>`, // Allows inner content to be projected
  styles: [
    `
      :host {
        // cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;
        text-decoration: underline;
      }
      :host:hover {
        text-decoration: none;
      }
    `,
  ],
})
export class HrefLinkComponent {}
