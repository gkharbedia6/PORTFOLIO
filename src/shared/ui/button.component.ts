import { Component } from '@angular/core';

@Component({
  selector: 'button[port-button]',
  standalone: true,
  template: `<ng-content></ng-content>`, // Allows inner content to be projected
  styles: [
    `
      :host {
        cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;
      }
      :host:hover {
        cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;
      }
    `,
  ],
})
export class ButtonComponent {}
