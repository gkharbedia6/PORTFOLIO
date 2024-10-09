import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'port-typewriter',
  standalone: true,
  template: ` <div id="typewriter">{{ displayText }}</div> `,
  styles: [
    `
      #typewriter {
        font-family: monospace; /* Typewriter-style font */
        white-space: pre-wrap; /* Preserve line breaks */
        overflow: hidden;
        display: inline-block; /* Keep content inline */
      }

      #typewriter::after {
        content: ''; /* Create an empty content for the cursor */
        border-right: 2px solid black; /* Simulate cursor */
        animation: blink 0.75s step-end infinite; /* Blinking animation */
        display: inline-block;
        width: 1px;
        height: 1em; /* Height of the cursor to match font size */
        vertical-align: middle; /* Align cursor properly with the text */
      }

      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
    `,
  ],
})
export class TypewriterComponent implements OnInit {
  @Input({ required: true }) text = '';
  @Input({ required: true }) delayBetweenCycles!: number; // Delay between typing and erasing (ms)
  typingSpeed = 150; // Time between each character (ms)
  erasingSpeed = 100; // Time to erase each character (ms)
  displayText = ''; // Text to display in the template
  index = 0;
  isErasing = false;

  constructor() {}

  ngOnInit() {
    this.typeWriter(); // Start the typewriter effect when the component is initialized
  }

  typeWriter() {
    if (!this.isErasing && this.index < this.text.length) {
      this.displayText = this.text.substring(0, this.index + 1); // Add next character
      this.index++;
      setTimeout(() => this.typeWriter(), this.typingSpeed); // Call typeWriter again to continue typing
    } else if (this.isErasing && this.index > 0) {
      this.displayText = this.text.substring(0, this.index - 1); // Erase the last character
      this.index--;
      setTimeout(() => this.typeWriter(), this.erasingSpeed); // Continue erasing
    } else if (this.index === this.text.length) {
      setTimeout(() => {
        this.isErasing = true; // Start erasing after the text is fully typed
        this.typeWriter();
      }, this.delayBetweenCycles);
    } else {
      this.isErasing = false; // Reset the cycle after erasing
      setTimeout(() => this.typeWriter(), this.delayBetweenCycles); // Start typing again after a delay
    }
  }
}
