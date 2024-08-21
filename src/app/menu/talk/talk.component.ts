import { Component } from '@angular/core';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrl: './talk.component.sass'
})
export class TalkComponent {

  view = false;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.view = true;
    }, 500);
  }
  
  link(url: string): void {
    window.open(url, '_blank');
  }

}
