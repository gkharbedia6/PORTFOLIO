import { Component } from '@angular/core';
import { ProjectsListComponent } from './projects/projects-list.component';
import { developerTexts, poem } from '../data-access/data';
import { NgClass, NgStyle } from '@angular/common';
import { ButtonComponent } from '../shared/ui/button.component';
import { TypewriterComponent } from './typewriter.component';

@Component({
  selector: 'port-section-one',
  standalone: true,
  imports: [
    ProjectsListComponent,
    ButtonComponent,
    NgClass,
    NgStyle,
    TypewriterComponent,
  ],
  template: `
    <div class="flex flex-col lg:flex-row w-full justify-start mt-10">
      <div
        class="lg:w-full flex flex-col items-center justify-start gap-2 lg:px-20"
      >
        <!-- <div
          class="flex flex-col z-[-1] relative items-center justify-start mb-12 "
        >
          <div
            class="w-[200px]  lg:w-[250px] rotating-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div class="bg-rich_silver mt-7  border-black p-[10px]  border-[1px]">
            @for (text of developer; let idx = $index; track idx) {
            <p class="text-[7px] m-0 lg:text-[13px] text-center lg:text-start">
              {{ text }}
            </p>
            }
          </div>
        </div> -->
        <div
          class="mt-12 flex w-full lg:w-[70vw] flex-col justify-start gap-10 mb-3 items-center"
        >
          <div class="flex justify-between w-full">
            <h3 class="text-lg font-bold underline">Projects</h3>

            <button
              port-button
              class="bg-black py-1 px-2 rounded-full text-white text-[8px] lg:text-[10px]"
              [ngClass]="{ 'bg-[#E12120]': areAllExpanded }"
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
  developer = developerTexts;
  areAllExpanded: boolean = false;
  poem: string = poem;

  toggleAllDescriptions() {
    this.areAllExpanded = !this.areAllExpanded;
  }
}
