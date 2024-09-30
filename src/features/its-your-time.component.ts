import { Component, inject, OnInit } from '@angular/core';
import { ItsYourTimeService } from '../shared/utils/its-your-time.service';

@Component({
  selector: 'port-its-your-time',
  standalone: true,
  imports: [],
  template: ` <div class="flex flex-col items-end justify-center">
    <h2 class="text-xs text-end">Your Local Time</h2>
    <p>{{ currentTime }}</p>
    <span class="text-[8px]">NO PROBLEM</span>
  </div>`,
})
export class ItsYourTimeComponent {
  currentTime!: string;
  timeService = inject(ItsYourTimeService);

  ngOnInit() {
    this.timeService.currentTime$.subscribe((time) => {
      this.currentTime = time;
    });
  }
}
