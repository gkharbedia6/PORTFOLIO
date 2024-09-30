import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItsYourTimeService {
  private currentTimeSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(this.getCurrentTime());
  currentTime$: Observable<string> = this.currentTimeSubject.asObservable();

  constructor() {
    this.updateTime();
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString(); // Fetch the local time with seconds
  }

  private updateTime(): void {
    setInterval(() => {
      this.currentTimeSubject.next(this.getCurrentTime());
    }, 1000); // Update every second
  }
}
