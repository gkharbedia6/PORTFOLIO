import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameFigureComponent } from '../../features/name-figure.component';
import { developerTexts, mainTexts } from '../../data-access/data';
import { ItsYourTimeComponent } from '../../features/its-your-time.component';
import { ProjectsListComponent } from '../../features/projects/projects-list.component';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../ui/button.component';
import { HrefLinkComponent } from '../ui/href-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NameFigureComponent,
    ItsYourTimeComponent,
    ProjectsListComponent,
    NgClass,
    ButtonComponent,
    HrefLinkComponent,
  ],
  styles: [
    `
      .rotating-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Center vertically */
      }

      .rotating-image {
        height: auto; /* Maintain aspect ratio */
        animation: rotate 10s linear infinite; /* Continuous rotation */
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],

  template: `
    <main
      class="w-full h-[5000px] font-monaco p-2 gap-10 lg:gap-2 flex-col md:hidden lg:flex overflow-x-hidden"
    >
      <port-name-figure></port-name-figure>

      <div class="flex flex-row justify-between mb-10 lg:mb-24">
        <p class="text-xs w-[70%]">
          {{ main }}
        </p>
        <port-its-your-time></port-its-your-time>
      </div>
      <div class="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between">
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <div class="flex flex-col gap-2">
          <!-- <a port-href-link href="https://soundcloud.com/pxpstar">
            <div
              class="flex flex-row items-baseline justify-start lg:justify-end gap-0"
            >
              <div class="w-[40px] flex items-center justify-center flex-row">
                <img
                  style=" cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
                  src="/assets/icons/soundCloud.svg"
                />
              </div>
              <p
                class="text-[13px]"
                style=" cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
              >
                soundcloud
              </p>
            </div>
          </a> -->
          <a port-href-link href="https://linktr.ee/pxpstar">
            <div
              class="flex flex-row items-baseline justify-start lg:justify-end gap-0"
            >
              <div class="w-[25px] flex items-center justify-center flex-row">
                <!-- <img
                  style=" cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
                  src="/assets/icons/linktree.png"
                /> -->
              </div>
              <p
                class="text-[13px] bg-rich_gold px-2 py-1"
                style=" cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
              >
                links
              </p>
            </div>
          </a>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row w-full justify-start mt-5">
        <div class="lg:w-[30%]">
          <img src="assets/images/profile1.png" />

          <iframe
            width="100%"
            height="350"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pxpstar&amp;color=0000FF"
          >
          </iframe>
        </div>

        <section
          class="lg:w-[70%] flex flex-col items-center justify-start gap-2 lg:px-20"
        >
          <div class="flex flex-col relative items-center justify-start">
            <div
              class="w-[200px] lg:w-[300px] rotating-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/assets/images/name.png"
                alt="Name Rotating Image"
                class="rotating-image"
              />
            </div>
            <div
              class="bg-light_gray mt-7  border-black p-[10px]  border-[1px]"
            >
              @for (text of developer; track text) {
              <p
                class="text-[7px] m-0 lg:text-[13px] text-center lg:text-start"
              >
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
                [ngClass]="{ 'bg-rich_gold text-black': areAllExpanded }"
                (click)="toggleAllDescriptions()"
              >
                {{ areAllExpanded ? 'collapse all' : 'expand all' }}
              </button>
            </div>
            <port-projects-list
              [areAllExpanded]="areAllExpanded"
            ></port-projects-list>
          </div>
        </section>
      </div>
    </main>
    <footer
      class="h-screen bg-light_gray flex flex-col items-center justify-center md:hidden lg:flex"
    >
      <h2 class=" font-bold text-[75px] lg:text-[150px] font-pacifico">
        ''FIN''
      </h2>
    </footer>

    <!-- MOBILE VIEW -->
    <main
      class="bg-cursor_blue h-screen w-screen text-white  font-monaco flex-col hidden md:flex lg:hidden items-center justify-center"
    >
      <h2 class="text-[60px] font-bold underline">Hello world!</h2>
      <p>This part has no view, please view on desktop or mobile!</p>
    </main>
  `,
})
export class AppComponent {
  main = mainTexts;
  developer = developerTexts;
  areAllExpanded: boolean = false;

  toggleAllDescriptions() {
    this.areAllExpanded = !this.areAllExpanded;
  }
}
