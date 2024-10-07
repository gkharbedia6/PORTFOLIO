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

  private dx = 2; // Change in x (speed in x direction)
  private dy = 2; // Change in y (speed in y direction)
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
