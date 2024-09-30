import { Component, Input } from '@angular/core';

@Component({
  selector: 'port-href-link',
  standalone: true,
  template: `<a
    style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
    href="{{ href }}"
    class="underline cursor-pointer"
    >{{ href }}</a
  >`,
})
export class HrefLinkComponent {
  @Input({ required: true }) href: string = '';
}
