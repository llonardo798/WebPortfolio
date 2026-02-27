import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Reference } from '../../../model/reference.interfaces';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.sass'
})
export class RecommendationsComponent {
  view = false;

  @ViewChild('slickModal', { static: true }) slickModal!: SlickCarouselComponent;

  constructor() { }

  slides: Reference[] = [
    { "rutaImagen": "assets/personas/anggelo.jpeg", "name": "Anggelo Moncada", "position": "Lider Tecnico", "company": "Qvision", "textReference": "Es una persona que técnicamente ha interiorizado los conceptos de diferentes soluciones tanto de arquitecturas como lenguajes y esto le da habilidad de analizar problemas o necesidades para ofrecer una solución que se adapta a las condiciones que se le presentan." },
    { "rutaImagen": "assets/personas/Andres.jpeg", "name": "Andres Zuares", "position": "Jefe Tecnico", "company": "Lidarit", "textReference": "Ha demostrado ser un desarrollador excepcional, destacando no solo por su habilidad técnica y dominio de múltiples tecnologías, sino también por su compromiso con la calidad y la innovación. Su capacidad para resolver problemas complejos y entregar soluciones eficientes ha sido invaluable para nuestro equipo." },
    { "rutaImagen": "assets/personas/Janis.jpeg", "name": "Janis Tovar Trujillo", "position": "", "company": "Matrica Digital", "textReference": "Leonardo se destaca por ser un gran profesional con amplios conocimientos técnicos y funcionales sobre los proyectos que trabaja, por su alta capacidad de análisis, orientación al logro buscando siempre la mejora continua y entregar mayor valor, su capacidad de adaptación, aprendizaje continuo, trabajo en equipo." },
    { "rutaImagen": "assets/personas/Elmer.jpeg", "name": "Elmer Diaz", "position": "Kafka Administrator", "company": "SIIGO", "textReference": "Leonardo se destaca por su creatividad y su capacidad para ofrecer soluciones innovadoras y eficientes, es un desarrollador talentoso, altamente competente, dedicado, con un enfoque meticuloso y una pasión por su trabajo que se refleja en cada proyecto que emprende." },
  ]

  // min-width: 304px;

  slideConfig = { variableWidth: true, arrows: true, autoplay: true, infinite: true, slidesToShow: 3, slidesToScroll: 1, autoplaySpeed: 3000, speed: 1500, };

  ngOnInit(): void {
    setTimeout(() => {
      this.view = true;
    }, 500);
  }


  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

}
