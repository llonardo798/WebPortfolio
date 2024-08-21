import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'WebPortfolio';
  sideBarOpen = false;
  backgroundInit = false;

  constructor(private elementRef: ElementRef) { }


  chageSideBar(sideBarOpen: any): void {
    if(window.innerWidth < 976) {
      let sidebar = this.elementRef.nativeElement.querySelector('#app-header');
      if(sideBarOpen) {
        sidebar.classList.add('header-open');
      } else {
        sidebar.classList.remove('header-open');
      }
    }
  }

  activeAboutMe(): void {
    this.backgroundInit = true;
  }
}
