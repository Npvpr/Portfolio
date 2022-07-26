import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    var lastScroll = 0;

    window.addEventListener('scroll', () => {

      const currentScroll = window.pageYOffset;
      const nav_div = document.getElementById('nav_div');

      if (currentScroll <= 0) {
        nav_div?.classList.add('top');
        nav_div?.classList.remove('scroll_down');
      } else if (currentScroll < lastScroll) {
        nav_div?.classList.remove('scroll_down', 'top');
      } else if (currentScroll > lastScroll && currentScroll > 50) {
        nav_div?.classList.add('scroll_down');
        // didn't remove top because removing it with create a transition from position relative to fixed
      }

      lastScroll = currentScroll;
    });
  }

  ngOnInit(): void {
  }

}
