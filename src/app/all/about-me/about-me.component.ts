import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.sass'
})
export class AboutMeComponent implements OnInit {

  view = false;
  startTyping = false;
  
  @Input() backgroundInit!: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.view = true;
      setTimeout(() => {
        let headerElement = this.elementRef.nativeElement.querySelector('#about-me');
        headerElement.style.animation = "fade-out 500ms  ease-in-out reverse forwards";
      }, 50);
  }
}
