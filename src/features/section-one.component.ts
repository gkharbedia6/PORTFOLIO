import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectsListComponent } from './projects/projects-list.component';
import { developerTexts } from '../data-access/data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'port-section-one',
  standalone: true,
  imports: [ProjectsListComponent, NgClass],
  template: `
    <div class="flex flex-col lg:flex-row w-full justify-start mt-5">
      <div class="lg:w-[30%] mb-14 lg:mb-0">
        <img src="assets/images/profile1.png" />

        <iframe
          width="100%"
          height="350"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pxpstar&amp;color=E12120"
        >
        </iframe>
      </div>

      <div
        class="lg:w-[70%] flex flex-col items-center justify-start gap-2 lg:px-20"
      >
        <div
          class="flex flex-col z-[-1] relative items-center justify-start mb-12 "
        >
          <div
            class="w-[200px]  lg:w-[250px] rotating-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <a href="/"> </a>
          </div>
          <div class="bg-light_gray mt-7  border-black p-[10px]  border-[1px]">
            @for (text of developer; let idx = $index; track idx) {
            <p class="text-[7px] m-0 lg:text-[13px] text-center lg:text-start">
              {{ text }}
            </p>
            }
          </div>
        </div>
        <div
          class="mt-2 lg:mt-14 flex w-full flex-col justify-start gap-10 mb-3 items-start"
        >
          <div class="flex justify-between w-full">
            <h3 class="text-lg font-bold underline">Projects</h3>

            <button
              port-button
              class="bg-black py-1 px-2 rounded-full text-white text-[8px] lg:text-[10px]"
              [ngClass]="{ 'bg-rich_silver text-black': areAllExpanded }"
              (click)="toggleAllDescriptions()"
            >
              {{ areAllExpanded ? 'collapse all' : 'expand all' }}
            </button>
          </div>
          <port-projects-list
            [areAllExpanded]="areAllExpanded"
          ></port-projects-list>
        </div>
      </div>
    </div>
  `,
})
export class SectionOneComponent {
  @Input() areAllExpanded: boolean = false;
  @Output() areAllExpandedChange = new EventEmitter<boolean>();
  developer = developerTexts;

  toggleAllDescriptions() {
    this.areAllExpandedChange.emit(this.areAllExpanded);
  }
}
