import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    const txtElement = document.getElementById('typewriting')!;
    const words = ["Software Engineer", "Full Stack Developer"];
    let wait = 500,
      wordIndex = 0,
      isDeleting = false,
      txt = '';

    type();
    function type() {
      // Current index of word
      const current = wordIndex % words.length;
      // Get full text of current word
      const fullTxt = words[current];

      // Check if deleting
      if (isDeleting) {
        // Remove char
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        // Add char
        txt = fullTxt.substring(0, txt.length + 1);
      }

      // Insert txt into element
      txtElement.innerHTML = `<span class="txt">${txt}|</span>`;

      // Initial Type Speed
      let typeSpeed = 150;

      // If word is complete
      if (!isDeleting && txt === fullTxt) {
        // Make pause at end
        typeSpeed = wait;
        // Set delete to true
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        // Move to next word
        wordIndex++;
        // Pause before start typing
        typeSpeed = 300;
      }

      setTimeout(() => type(), typeSpeed);
    }
  }
}
