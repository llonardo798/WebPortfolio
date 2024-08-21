import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.sass'
})
export class RecommendationsComponent {
  view = false;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.view = true;
    }, 500);
  }
}
