import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  
  sideBarOpen = false;
  //TODO - Reactive variable
  // startTyping = true;
  startTyping = false;
  words: string[] = ["Web", "Backend", "Movil "];
  currentWordIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typewriterElement!: HTMLElement;
  isSmallScreen: boolean = false;
  widthScreen: number = 976

  @Output() childEmitterHeader = new EventEmitter<boolean>();
  @Output() backgroundInit = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.checkScreenSize();
    setTimeout(() => {
      let h1 = this.elementRef.nativeElement.querySelector('#title');
      this.typewriterElement = this.elementRef.nativeElement.querySelector('#typewriter');
      this.type();
      h1.style.borderRight = "none";
    }, 2100);
    
  }
  
  type(): void {
    const currentWord = this.words[this.currentWordIndex];
    if (this.isDeleting) {
      this.typewriterElement.textContent = currentWord.substring(0, this.currentCharIndex--);
      if (this.currentCharIndex < 0) {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      }
    } else {
      this.typewriterElement.textContent = currentWord.substring(0, this.currentCharIndex++);
      if (this.currentCharIndex > currentWord.length) {
        this.isDeleting = true;
        if((this.words.length-1) != this.currentWordIndex){
          setTimeout(() => this.type(), 1000);
        } else {
          setTimeout(() => {
            let headerStart = this.elementRef.nativeElement.querySelector('#headerStart');
            headerStart.style.animation = "fade-out 1s ease-in-out forwards";
            setTimeout(() => {
              this.startTyping = false;
              setTimeout(() => {
              let headerElement = this.elementRef.nativeElement.querySelector('#header');
              headerElement.style.animation = "fade-out 280ms  ease-in-out reverse forwards";
              this.backgroundInit.emit(true);
              }, 100);
            }, 1100);
          }, 1500)
        }
        return;
      }
    }
    setTimeout(() => this.type(), this.isDeleting ? 50 : 100);
  }

  sidebar(): void {
    this.sideBarOpen = !this.sideBarOpen
    this.childEmitterHeader.emit(this.sideBarOpen);
    console.log("SideBar" + this.sideBarOpen);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < this.widthScreen;
  }
}
