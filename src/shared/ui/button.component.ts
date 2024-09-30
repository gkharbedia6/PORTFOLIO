import { Component } from '@angular/core';

@Component({
  selector: 'button[port-button]',
  standalone: true,
  template: `<ng-content></ng-content>`, // Allows inner content to be projected
  styles: [
    `
      :host {
        cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;
        text-decoration: underline;
        background: none;
        border: none;
        padding: 0;
        color: inherit;
      }
      :host:hover {
        text-decoration: none;
      }
    `,
  ],
})
export class ButtonComponent {}
