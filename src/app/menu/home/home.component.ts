import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  view = true;
  
  searchWeight(): number {
    return window.innerWidth;
  }
}
