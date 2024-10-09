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
    <div class="flex flex-col lg:flex-row w-full justify-start mt-5">
      <div
        class="lg:w-[30%] mb-14 lg:mb-0 flex flex-col items-center justify-start"
      >
        @if (isClosed) {
        <port-typewriter
          class="w-full text-[13px] flex items-start py-12  justify-start"
          [text]="poem"
          [delayBetweenCycles]="5000"
        ></port-typewriter>
        } @else {
        <div
          class="flex  flex-col w-full justify-start items-center min-h-[400px] old_windows-window-border"
        >
          <div
            class="w-full h-6 bg-rich_silver px-1 flex gap-1 justify-start items-center"
          >
            <p class="text-black text-[13px] text-start flex-grow">
              profile pic 1
            </p>
            <div
              class="w-4 h-4 bg-rich_silver focus:bg-black old_windows-window-border flex justify-center items-center"
            >
              <span class="text-black text-[10px] mt-[1px] ">
                <img src="/assets/icons/foldIcon.jpg" />
              </span>
            </div>
            <div
              class="w-4 h-4 bg-rich_silver focus:bg-black old_windows-window-border flex justify-center items-center"
            >
              <span class="text-black text-[10px] mt-[1px] ">
                <img src="/assets/icons/iconFullscreen.jpg" />
              </span>
            </div>
            <div
              class="w-4 h-4 bg-rich_silver focus:bg-black old_windows-window-border flex justify-center items-center"
              (click)="toggleIsClosed()"
            >
              <span class="text-black text-[10px] mt-[1px] ">
                <img src="/assets/icons/iconClose.jpg" />
              </span>
            </div>
          </div>
          <img src="assets/images/profile1.png" class="w-full object-cover" />
        </div>

        }

        <iframe
          width="100%"
          height="350"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pxpstar&amp;color=0000FF"
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
          ></div>
          <div class="bg-rich_silver mt-7  border-black p-[10px]  border-[1px]">
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
  developer = developerTexts;
  areAllExpanded: boolean = false;
  isClosed: boolean = false;
  poem: string = poem;

  toggleAllDescriptions() {
    this.areAllExpanded = !this.areAllExpanded;
  }

  toggleIsClosed() {
    this.isClosed = !this.isClosed;
  }
}
