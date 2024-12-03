import { Component, Input } from '@angular/core';
import { HrefLinkComponent } from '../../../shared/ui/href-link.component';
import { ButtonComponent } from '../../../shared/ui/button.component';
import { DatePipe, NgIf } from '@angular/common';
import { iJobExperience } from '../../../interfaces/job-experience.interface';

@Component({
  selector: 'port-job-item',
  standalone: true,
  imports: [HrefLinkComponent, ButtonComponent, DatePipe],
  template: `
    <div
      class="flex flex-col gap-2 pb-2 overflow-hidden lg:w-[55vw] w-[95vw] mb-7"
    >
      <h3 class="text-md font-bold text-center underline">{{ job.company }}</h3>
      <div
        class="description overflow-hidden text-[12px] max-w-full transition-all duration-200"
        [class.expanded]="isExpanded"
      >
        <div class="flex flex-col items-center justify-center gap-2">
          <h4 class="text-sm font-bold flex flex-row gap-2">
            <p class="text-[13px] text-black">last position:</p>
            <p>{{ job.lastPosition }}</p>
          </h4>
          <h4 class="text-sm font-bold flex flex-row gap-2">
            <p class="text-[13px] text-black">dates:</p>
            <p>
              {{ job.startDate | date : 'MMM yyyy' }} -
              {{ job.endDate | date : 'MMM yyyy' }}
            </p>
          </h4>
          <p>{{ job.description }}</p>
        </div>

        @if (isExpanded) {

        <div class="flex flex-row items-center justify-between mt-10 mb-5">
          <div class="w-[50%]  flex flex-col gap-2 mt-1">
            <h4>Main technologies used:</h4>
            <ul>
              @for (technology of job.technologies; track $index) {
              <li>{{ technology }}</li>
              }
            </ul>
          </div>
          <div class="w-[50%] flex flex-col gap-2 justify-center items-end">
            <h4 class="flex flex-row  gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#fff"
              >
                <path
                  d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
              </svg>
              <span class="mt-1">Developer notes:</span>
            </h4>
            <p class="text-[10px] text-white text-end">
              {{ job.developerNotes }}
            </p>
          </div>
        </div>
        }
      </div>

      <div class="flex justify-center">
        <button
          class="text-[10px] w-fit underline bg-none border-none p-0 text-inherit hover:no-underline"
          port-button
          (click)="toggleDescription()"
        >
          {{ isExpanded ? 'Read less' : 'Read more' }}
        </button>
      </div>
    </div>
  `,
})
export class JobItemComponent {
  @Input({ required: true }) job!: iJobExperience;
  @Input() isExpanded = false;

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }
}
