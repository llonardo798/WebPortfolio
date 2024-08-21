import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  view = false;
  icon = '&#129304;';
  
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
