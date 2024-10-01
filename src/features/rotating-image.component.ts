import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'port-rotating-image',
  standalone: true,
  template: `
    <figure>
      <div #container class="circle-container">
        <img
          #dvdImage
          src="/assets/images/DVD.png"
          class="dvd-logo"
          alt="DVD Logo"
        />
      </div>
    </figure>
  `,
  styles: [
    `
      .circle-container {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: transparent;
      }
      .dvd-logo {
        position: absolute;
        width: 150px;
        height: auto;
        transition: transform 0.05s;
      }
      @media (max-width: 1000px) {
        .dvd-logo {
          width: 100px;
        }
      }
    `,
  ],
})
export class RotatingImageComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  @ViewChild('dvdImage') dvdImage!: ElementRef<HTMLImageElement>;

  private dx = 5; // Change in x (speed in x direction)
  private dy = 5; // Change in y (speed in y direction)
  private positionX = 0;
  private positionY = 0;

  ngAfterViewInit() {
    this.animate();
  }

  private animate() {
    const containerWidth = this.container.nativeElement.clientWidth;
    const containerHeight = this.container.nativeElement.clientHeight;
    const imageWidth = this.dvdImage.nativeElement.offsetWidth;
    const imageHeight = this.dvdImage.nativeElement.offsetHeight;

    // Update position
    this.positionX += this.dx;
    this.positionY += this.dy;

    // Check for collisions with the boundaries
    if (this.positionX <= 0 || this.positionX + imageWidth >= containerWidth) {
      this.dx *= -1; // Reverse direction on X-axis
    }
    if (
      this.positionY <= 0 ||
      this.positionY + imageHeight >= containerHeight
    ) {
      this.dy *= -1; // Reverse direction on Y-axis
    }

    // Update the position of the DVD image
    this.dvdImage.nativeElement.style.transform = `translate(${this.positionX}px, ${this.positionY}px)`;

    requestAnimationFrame(() => this.animate()); // Call animate again for the next frame
  }
}

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
