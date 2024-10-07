import { Component } from '@angular/core';
import { JobsListComponent } from './jobs/jobs-list.component';
import { HrefLinkComponent } from '../shared/ui/href-link.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'port-section-two',
  standalone: true,
  imports: [JobsListComponent, HrefLinkComponent, NgClass],
  template: `
    <div
      class="flex items-start lg:items-center justify-center lg:px-64 w-full h-full mt-24"
    >
      <div
        class="w-full h-fit border-[1px] border-black p-2 bg-rich_silver text-white"
      >
        <div class="flex flex-row justify-between w-full">
          <h3 class="text-lg font-bold underline text-center text-black">
            Job Experience and Education
          </h3>
          <button
            port-button
            class="bg-black py-1 px-2 rounded-full text-white text-[8px] lg:text-[10px]"
            [ngClass]="{ 'bg-rich_silver text-black': areAllExpanded }"
            (click)="toggleAllDescriptions()"
          >
            {{ areAllExpanded ? 'collapse all' : 'expand all' }}
          </button>
        </div>
        <div class="flex flex-col items-center justify-center gap-2 mt-10">
          <port-jobs-list [areAllExpanded]="areAllExpanded" />
          <a
            port-href-link
            href="https://en.wikipedia.org/wiki/The_College_Dropout"
            class="underline text-black text-center text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            THE COLLEGE DROPOUT
          </a>
          <div class="flex flex-col gap-2 mb-2">
            <p class="text-black text-center text-xl">
              &lt;div&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            </p>
          </div>
          <h3 class="text-black text-center  underline">Certificates:</h3>
          <div class="flex flex-col gap-2"></div>
        </div>
      </div>
    </div>
  `,
})
export class SectionTwoComponent {
  areAllExpanded: boolean = false;

  toggleAllDescriptions() {
    this.areAllExpanded = !this.areAllExpanded;
  }
}
