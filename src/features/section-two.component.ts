import { Component } from '@angular/core';
import { JobsListComponent } from './jobs/jobs-list.component';
import { EductionListComponent } from './education/education-list.component';

@Component({
  selector: 'port-section-two',
  standalone: true,
  imports: [JobsListComponent, EductionListComponent],
  template: `
    <div class="flex items-center justify-center px-64 w-full h-full mt-24 ">
      <div
        class="w-full h-full  border-[1px] border-black p-2 bg-rich_silver text-white"
      >
        <h3 class="text-lg font-bold underline text-center text-black">
          Job Experience and Education
        </h3>
        <div class="flex flex-col items-center justify-center gap-2 mt-10">
          <port-jobs-list [areAllExpanded]="areAllExpanded" />
          <p class="border-[1px] border-white w-full h-full"></p>
          <port-education-list [areAllExpanded]="areAllExpanded" />
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
