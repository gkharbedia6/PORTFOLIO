import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  styles: [
    `
      figure {
        font-family: 'Helvetica';
        color: #000;
        visibility: visible;
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
        background: transparent;
        display: block;
        animation: wobble 5s linear infinite;
        transform-origin: center center;
        transform-style: preserve-3d;
        width: 49.5vw;
        position: relative;
        top: 0vw;
        left: 1vw;
        margin-top: 3vw;
        // margin-bottom: 15vw;
        z-index: 9991;
        perspective: 1000px;
      }
      /* Styling for each <h1> element (main-title) */
      .main-title {
        visibility: visible;
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        background: transparent;
        padding-left: 10px;
        font-family: 'HelveticaNeueBold';
        margin-bottom: 1vw;
        position: absolute;
        font-size: 6vw;
        color: #000;
        transform: translateZ(1px);
      }

      /* Keyframes for the wobble animation */
      @keyframes wobble {
        0% {
          transform: rotateY(0deg) translateZ(1px);
        }
        100% {
          transform: rotateY(360deg) translateZ(1px);
        }
      }
    `,
  ],
  template: `
    <p class="text-xs font-monaco">
      Giorgi Kharbedia, born in 90s, is a skilled front-end developer with a
      passion for creating intuitive and visually appealing web interfaces. With
      expertise in modern technologies, Giorgi combines a strong technical
      background with a creative approach to design, ensuring seamless user
      experiences. His attention to detail and ability to stay current with the
      latest trends make him a valuable asset in the ever-evolving field of web
      development.
    </p>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div class="flex flex-row w-full justify-start gap-[40px]">
      <div class="w-80">
        <img src="assets/images/profile1.png" />
      </div>
      <div>
        <figure class="w-[50%]">
          <a href="/">
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
            <h1 class="main-title">Giorgi Kharbedia</h1>
          </a>
        </figure>
        <div
          style="background-color: #f0f0f0; border: 1px solid #000; padding: 10px; margin-top: 10px;"
        >
          <p style="font-size: 14px; margin: 0;">
            Front-end developer with a passion for creating intuitive web
            interfaces.
          </p>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {}
