import { Component, Input, OnInit } from '@angular/core';
import { iProject } from '../../../interfaces/project.interface';
import { HrefLinkComponent } from '../../../shared/ui/href-link.component';
import { ButtonComponent } from '../../../shared/ui/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'port-project-item',
  standalone: true,
  template: `
    <div
      [ngClass]="{ 'opacity-50': project.disabled }"
      class="flex flex-col gap-2 border-b relative border-black pb-2 overflow-hidden w-[95vw] lg:w-full mb-7"
    >
      @if (project.disabled) {
      <p class="text-xs text-bold text-akira_red absolute top-0 right-0">
        Currently unavailable
      </p>

      }
      <h3 class="text-md font-bold ">
        {{ project.name }}
      </h3>

      <a
        port-href-link
        class="text-[13px] w-fit"
        [href]="project.url"
        target="_blank"
        rel="noopener noreferrer"
        >{{ project.url }}</a
      >

      <div
        class="description overflow-hidden text-[12px] max-w-full transition-all duration-200"
        [class.expanded]="isExpanded"
      >
        @if (!isExpanded) {
        <p class="truncate">{{ firstSentence }}</p>
        } @else {

        <p>{{ project.description }}</p>

        <div class="flex flex-row items-start justify-between mt-10 mb-5">
          <div class="w-[50%]  flex flex-col gap-2 mt-1">
            <h4>Main technologies used:</h4>
            <ul>
              @for (technology of project.technologies; track $index) {
              <li>{{ technology }}</li>
              }
            </ul>
          </div>
          <div class="w-[50%] flex flex-col gap-2 justify-start items-end">
            <h4 class="flex flex-row  gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#6b7280"
              >
                <path
                  d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
              </svg>
              <span class="mt-1">Developer notes:</span>
            </h4>
            <p class="text-[10px] text-gray-500 text-end">
              {{ project.developerNotes }}
            </p>
          </div>
        </div>
        }
      </div>

      <div class="flex justify-center">
        <button
          class="text-[10px] w-fit underline bg-none border-none p-0 text-inherit"
          port-button
          (click)="toggleDescription()"
        >
          {{ isExpanded ? 'Read less' : 'Read more' }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .description {
        max-height: 3em; /* Adjust based on how much you want to show */
        transition: max-height 0.2s ease-out;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .description.expanded {
        max-height: none; /* Remove the height restriction when expanded */
        white-space: normal;
      }
    `,
  ],
  imports: [HrefLinkComponent, ButtonComponent, NgClass],
})
export class ProjectItemComponent implements OnInit {
  @Input({ required: true }) project: iProject = {
    name: '',
    url: '',
    description: '',
  };
  @Input() isExpanded = false;
  // isExpanded = true;

  firstSentence = '';

  ngOnInit() {
    const splitDescription = this.project.description.split('.');
    if (splitDescription.length > 1) {
      this.firstSentence = splitDescription[0] + '.';
    } else {
      this.firstSentence = this.project.description;
    }
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }
}
