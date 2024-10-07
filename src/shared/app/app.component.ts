import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RotatingImageComponent } from '../../features/rotating-image.component';
import { mainTexts } from '../../data-access/data';
import { ItsYourTimeComponent } from '../../features/its-your-time.component';
import { ProjectsListComponent } from '../../features/projects/projects-list.component';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../ui/button.component';
import { HrefLinkComponent } from '../ui/href-link.component';
import { SectionOneComponent } from '../../features/section-one.component';
import { SectionTwoComponent } from '../../features/section-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RotatingImageComponent,
    ItsYourTimeComponent,
    ProjectsListComponent,
    NgClass,
    ButtonComponent,
    HrefLinkComponent,
    NgOptimizedImage,
    SectionOneComponent,
    SectionTwoComponent,
  ],
  styles: [
    `
      .rotating-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .rotating-image {
        height: auto;
        animation: rotate 10s linear infinite;
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
    <div class="w-screen h-fit flex items-center justify-between">
      index.html

      <div class="flex flex-row gap-1 items-baseline">
        <p class="text-[9px]  text-black">send me mail</p>

        <a
          port-href-link
          href="mailto:giorgikharbedia6@gmail.com"
          class="text-rich_silver font-bold text-[13px] "
        >
          giorgikharbedia6&#64;gmail.com
        </a>
      </div>
    </div>

    <main
      class="h-[5000px] w-screen font-monaco p-2 gap-10 lg:gap-2 flex-col md:hidden lg:flex overflow-x-hidden"
    >
      <div
        class="absolute top-1/4 left-1/2 transform -translate-x-1/4 lg:-translate-y-1/2 lg:w-[660px] w-[330px] "
      >
        <a href="/">
          <img src="/assets/images/gkLogo.gif" />
        </a>
      </div>

      <div class="fixed z-[-1] top-0 left-0 w-screen h-screen">
        <port-rotating-image></port-rotating-image>
      </div>

      <div class="flex flex-row justify-between mb-10 lg:mb-40">
        <p class="text-xs w-[70%]">
          {{ main }}
        </p>
        <port-its-your-time></port-its-your-time>
      </div>
      <div
        class="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between mb-12 lg:mb-12"
      >
        <h1 class="text-3xl font-bold underline">Hello world!.xyz</h1>
        <div class="flex flex-col gap-2 relative z-20">
          <a port-href-link href="https://blankdiplomat.com">
            <div
              class="flex absolute lg:-top-10 top-2 right-0  lg:right-0 flex-row items-baseline justify-start lg:justify-end gap-0"
            >
              <div
                class="w-[25px] flex items-center justify-center flex-row"
              ></div>
              <p
                class="text-[13px] bg-black rounded-full text-white px-2 py-1"
                style=" cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
              >
                blankdiplomat.com
              </p>
            </div>
          </a>

          <a port-href-link href="https://linktr.ee/pxpstar">
            <div
              class="flex flex-row items-baseline justify-start lg:justify-end gap-0"
            >
              <div
                class="w-[25px] flex items-center justify-center flex-row"
              ></div>
              <p
                class="text-[13px] bg-rich_silver px-2 py-1"
                style=" cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
              >
                links
              </p>
            </div>
          </a>
        </div>
      </div>
      <port-section-one
        [areAllExpanded]="areAllExpanded"
        (areAllExpandedChange)="toggleAllDescriptions()"
      ></port-section-one>
      <port-section-two></port-section-two>
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
      <h2 class="text-[60px] font-bold underline">Hello world!.xyz</h2>
      <p>This part has no view, please view on desktop or mobile!</p>
    </main>
  `,
})
export class AppComponent {
  main = mainTexts;
  areAllExpanded: boolean = false;

  toggleAllDescriptions() {
    this.areAllExpanded = !this.areAllExpanded;
  }
}
