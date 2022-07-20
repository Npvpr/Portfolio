import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio';
  fakearray = new Array(100);

  constructor() {
    window.addEventListener('scroll', () => {
      console.log(window.pageYOffset)
      const currentScroll = window.pageYOffset;
      const nav_div = document.getElementById('nav_div')

      if  (currentScroll <= 0){
        nav_div?.classList.add('top')
      }
    })
  }
  
}
