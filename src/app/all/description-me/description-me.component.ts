import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-description-me',
  templateUrl: './description-me.component.html',
  styleUrl: './description-me.component.sass'
})
export class DescriptionMeComponent {

  widthScreenStart: number = 700;
  widthScreen: number = this.widthScreenStart;
  isSmallScreen: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth > this.widthScreen;
  }

  changeWidthScreen(width: number): void {
    this.widthScreen = width;
    this.checkScreenSize();
  }
}
