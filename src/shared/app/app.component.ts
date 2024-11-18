import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RotatingImageComponent } from '../../features/rotating-image.component';
import { chatGPTQuote } from '../../data-access/data';
import { ItsYourTimeComponent } from '../../features/its-your-time.component';
import { ProjectsListComponent } from '../../features/projects/projects-list.component';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { ButtonComponent } from '../ui/button.component';
import { HrefLinkComponent } from '../ui/href-link.component';
import { SectionOneComponent } from '../../features/section-one.component';
import { SectionTwoComponent } from '../../features/section-two.component';
import { TypewriterComponent } from '../../features/typewriter.component';

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
    TypewriterComponent,
    NgStyle,
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
      <p class="text-[10px]">index.html</p>
    </div>
    <main
      class=" w-screen font-monaco p-2 gap-10 lg:gap-2 flex-col md:hidden lg:flex overflow-x-hidden"
    >
      <div
        class="w-screen py-2 px-2 h-fit flex fixed bottom-0 left-0 flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <h2
          class="text-[10px] order-2 lg:order-1 font-helveticaNeueBold text-black"
        >
          © 2024 Giorgi Kharbedia. All rights reserved.
        </h2>
        <div class="flex flex-row gap-1 items-baseline">
          <p class="text-[10px]  text-black">send me an email</p>

          <a
            port-href-link
            href="mailto:giorgikharbedia6@gmail.com"
            class="font-bold text-[10px] font-helveticaNeueBold "
          >
            giorgikharbedia6&#64;gmail.com
          </a>
        </div>
      </div>
      <div
        class="absolute top-1/4 z-[-10] left-1/2 transform -translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/2 lg:w-[660px] w-[350px] "
      >
        <img src="/assets/images/gkLogo.gif" />
      </div>

      <!-- <div class="fixed z-[-20] top-0 left-0 w-screen h-screen">
        <port-rotating-image></port-rotating-image>
      </div> -->

      <!-- <iframe
          width="100%"
          height="350"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pxpstar&amp;color=0000FF"
        >
        </iframe> -->

      <div class="flex flex-row justify-between mb-24 lg:mb-10">
        <div class="flex flex-col gap-2 w-[70%]">
          <p class="text-xs ">
            {{ quote.quote }}
          </p>
          <!-- <p class="text-end text-[10px] font-bold">{{ quote.author }}</p> -->
        </div>
        <port-its-your-time></port-its-your-time>
      </div>
      <div
        class="lg:w-[30%] relative mb-14 lg:mb-0 flex flex-col items-center justify-start"
      >
        @for (item of images; track $index) {

        <!-- <port-typewriter
          class="w-full text-[13px] flex items-start py-12  justify-start"
          [text]="poem"
          [delayBetweenCycles]="5000"
        ></port-typewriter> -->
        @if (picOpen?.includes(item.id)) {
        <div
          [ngStyle]="{ 'left.px': item.id * 30, 'top.px': -item.id * 10 }"
          class="flex absolute flex-col w-full justify-start items-center min-h-[400px] old_windows-window-border"
        >
          <div
            class="w-full h-6 bg-rich_silver px-1 flex gap-1 justify-start items-center"
          >
            <p class="text-black text-[13px] text-start flex-grow">
              {{ item.description }}
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
              (click)="toggleIsClosed(item.id)"
            >
              <span class="text-black text-[10px] mt-[1px] ">
                <img src="/assets/icons/iconClose.jpg" />
              </span>
            </div>
          </div>
          <img src="{{ item.imageUrl }}" class="w-full object-cover" />
        </div>
        } }
      </div>

      <div
        class="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between mb-12 lg:mb-12"
      >
        <h1 class="text-xl font-bold underline">Hello world!.xyz</h1>
        <!-- <div class="flex flex-col gap-2 relative z-20">
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
        </div> -->
      </div>
      <port-section-one></port-section-one>
    </main>
    <footer
      class="h-screen  bg-section-two flex flex-col items-center justify-center md:hidden lg:flex"
    >
      <port-typewriter
        class="text-[24px] text-cursor_blue"
        text="Thanks for visiting"
        [delayBetweenCycles]="1000"
      ></port-typewriter>
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
  images = [
    {
      id: 1,
      imageUrl: 'assets/images/profile1.png',
      description: 'profile pic 1',
    },
    {
      id: 2,
      imageUrl: 'assets/images/cuteDoggy.png',
      description: 'cute dog image',
    },
    {
      id: 3,
      imageUrl: 'assets/images/profile2.png',
      description: 'profile pic 2',
    },
  ].reverse();

  quote = chatGPTQuote;
  picOpen: number[] | null = [1, 2, 3];

  toggleIsClosed(id: number) {
    this.picOpen?.splice(this.picOpen.indexOf(id), 1);
    console.log(this.picOpen);
  }
}
