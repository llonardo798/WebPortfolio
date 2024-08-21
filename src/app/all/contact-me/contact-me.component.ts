import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.sass'
})
export class ContactMeComponent {

  view = false;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.view = true;
    }, 500);
  }
}
