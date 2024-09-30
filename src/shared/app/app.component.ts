import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameFigureComponent } from '../../features/name-figure.component';
import { developerTexts, mainTexts } from '../../data-access/data';
import { ItsYourTimeComponent } from '../../features/its-your-time.component';
import { ProjectsListComponent } from '../../features/projects/projects-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NameFigureComponent,
    ItsYourTimeComponent,
    ProjectsListComponent,
  ],
  template: `
    <main
      class="w-full h-[5000px] font-monaco p-2 gap-10 lg:gap-2 flex-col md:hidden lg:flex"
    >
      <div class="flex flex-row justify-between mb-2 lg:mb-0">
        <p class="text-xs w-[70%]">
          {{ main }}
        </p>
        <port-its-your-time></port-its-your-time>
      </div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <div class="flex flex-col lg:flex-row w-full justify-start mt-5">
        <div class="lg:w-[30%]">
          <img src="assets/images/profile1.png" />
        </div>
        <section
          class="lg:w-[70%] flex flex-col items-center justify-start gap-2 lg:px-20"
        >
          <div class="flex flex-col items-center justify-start">
            <port-name-figure></port-name-figure>
            <div
              class="bg-light_gray mt-7  border-black p-[10px]  border-[1px]"
            >
              @for (text of developer; track text) {
              <p
                class="text-[10px] m-0 lg:text-[13px] text-center lg:text-start"
              >
                {{ text }}
              </p>
              }
            </div>
          </div>
          <div
            class="mt-2 lg:mt-14 flex w-full flex-col justify-start gap-10 mb-3 items-start"
          >
            <h3 class="text-lg font-bold underline">PROJECTS</h3>
            <port-projects-list></port-projects-list>
          </div>
        </section>
      </div>
    </main>

    <!-- MOBILE VIEW -->
    <main
      class="bg-cursor_blue h-screen w-screen text-white  font-monaco flex-col hidden md:flex items-center justify-center"
    >
      <h2 class="text-[60px] font-bold underline">Hello world!</h2>
      <p>This part has no view, please view on desktop or mobile!</p>
    </main>
  `,
})
export class AppComponent {
  main = mainTexts;
  developer = developerTexts;
}
