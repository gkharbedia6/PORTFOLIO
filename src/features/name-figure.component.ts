// import { Component } from '@angular/core';

// @Component({
//   selector: 'port-name-figure',
//   standalone: true,
//   template: ` <figure>
//     <a href="/">
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//       <h1
//         style="cursor: url('/assets/cursors/blueCursorPointer.png') 12 12, pointer;"
//         class="main-title"
//       >
//         Giorgi Kharbedia
//       </h1>
//     </a>
//   </figure>`,
//   styles: [
//     `
//       figure {
//         font-family: 'Helvetica';
//         color: #000;
//         visibility: visible;
//         box-sizing: inherit;
//         margin: 0;
//         padding: 0;
//         border: 0;
//         font-size: 100%;
//         font-weight: normal;
//         vertical-align: baseline;
//         background: transparent;
//         display: block;
//         animation: wobble 5s linear infinite;
//         transform-origin: center center;
//         transform-style: preserve-3d;
//         width: 49.5vw;
//         position: relative;
//         top: 0vw;
//         left: 1vw;
//         // margin-top: 3vw;
//         // margin-bottom: 15vw;
//         z-index: 9991;
//         perspective: 1000px;
//       }
//       /* Styling for each <h1> element (main-title) */
//       .main-title {
//         visibility: visible;
//         box-sizing: inherit;
//         margin: 0;
//         padding: 0;
//         border: 0;
//         vertical-align: baseline;
//         background: transparent;
//         padding-left: 10px;
//         font-family: 'HelveticaNeueBold';
//         margin-bottom: 1vw;
//         position: absolute;
//         font-size: 6vw;
//         color: #000;
//         transform: translateZ(1px);
//       }

//       @media (max-width: 700px) {
//         .main-title {
//           font-size: 5vw; /* Font size for smaller screens */
//         }
//       }
//       /* Keyframes for the wobble animation */
//       @keyframes wobble {
//         0% {
//           transform: rotateY(0deg) translateZ(1px);
//         }
//         100% {
//           transform: rotateY(360deg) translateZ(1px);
//         }
//       }
//     `,
//   ],
// })
// export class NameFigureComponent {
//   constructor() {}
// }

import { Component } from '@angular/core';

@Component({
  selector: 'port-name-figure',
  standalone: true,
  template: `
    <figure>
      <div class="circle-container">
        <div class="circle">
          <div class="w-[150px]">
            <img src="/assets/images/DVD.png" />
          </div>
        </div>
      </div>
    </figure>
  `,
  styles: [
    `
      .circle-container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        animation: rotate 20s linear infinite; /* Continuous rotation */
      }

      .circle {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .letter {
        position: absolute;
        font-size: 20px; /* Adjust font size */
        transform: rotate(calc(var(--i) * 11.25deg)) translate(90px)
          rotate(calc(var(--i) * -11.25deg));
        /* Calculate the rotation and position for each letter */
      }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    `,
  ],
})
export class NameFigureComponent {
  constructor() {}
}
