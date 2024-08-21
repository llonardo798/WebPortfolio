import { Component, ElementRef, Host, HostListener } from '@angular/core';
import { Project } from '../../../model/project.interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})

export class ProjectsComponent {

  view = false;
  projects: Project[] = [{
    "id": 1,
    "name": "Venta de divisas",
    "description": "Compra y recibe tus divisas sin necesidad de salir de casa, a domicilio, con Banco Unión",
    "descriptionLarge": "Aplicación desarrollada para Banco Union en la que se permite a un usuario comprar y recibir divisas pidiendolas a domicilio, la compra es un evento asyncrono y la palicación permite administrar precios de divisas, barrios, ciudades, y aceptar o rechazar la compra de las divisas",
    "technologies": ["Angular", "TypeScript", "Java", "Spring", "Sql"],
    "imagePaths": ["assets/projects/ventadedivisas.png"],
    "publicUrl": "https://ventadedivisas.bancounion.com/public-currency-sales/process/quote",
    "videoUrl": "",
    "githubUrl": "",
    "importance": 5
  }, {
    "id": 2,
    "name": "Debt Fighter",
    "description": "Debt Fighter es una herramienta diseñada para ayudarlo a resolver sus deudas crediticias",
    "descriptionLarge": "Debt Fighter es una aplicación movil diseñada para ayudar al publico estadounidense a resolver sus deudas crediticias generando planes de pago, dando asesoramiento juridico y financiero. La aplicación permite a los usuarios ver deudas de diferentes bancosy establecer prioridades de pago.",
    "technologies": ["UX/UI"],
    "imagePaths": ["assets/projects/debt-figther.png", "assets/projects/debt-figther-2.png", "assets/projects/debt-figther-3.png"],
    "publicUrl": "https://play.google.com/store/apps/details?id=org.accuratefinancialsolutions.totalpassport",
    "videoUrl": "",
    "githubUrl": "",
    "importance": 1
  }, {
    "id": 3,
    "name": "Lealtad Coomeva",
    "description": "Privada - Programa de beneficios para los asociados de Coomeva - pagina para gestion administrativa",
    "descriptionLarge": "Lealtad Coomeva es un programa de fidelización de Coomeva y Empresas Coomeva, que premia la fidelidad de los miembros de Pinos Coomeva (asociados, clientes y/o usuarios) a través de la moneda Pinos. La aplicación permite a los adminsitradores del programa lealtad Coomeva gestionar los beneficios, premios, y usuarios del programa.",
    "technologies": ["Angular", "TypeScript", "Java", "Spring", "Sql"],
    "imagePaths": ["assets/projects/lealtad-coomeva.jpg",],
    "publicUrl": "",
    "videoUrl": "",
    "githubUrl": "",
    "importance": 5
  }, {
    "id": 4,
    "name": "Echale Salsita App",
    "description": "La radio salsa online de Francia para el mundo",
    "descriptionLarge": "Echale Salsita es una aplicación movil que permite a los usuarios escuchar la radio de Echale Salsita Online desde el dispositivo movil, mostrando la información basica de la canción que se esta reproduciendo",
    "technologies": ["Android", "UX/UI"],
    "imagePaths": ["assets/projects/echalesalsita-2.jpg", "assets/projects/echalesalsita-1.jpg"],
    "publicUrl": "https://echalesalsita.net/",
    "videoUrl": "",
    "githubUrl": "",
    "importance": 3
  }, {
    "id": 5,
    "name": "Lidarit Manager",
    "description": "Herramienta para la gestión de proyectos y el trabajo de campo para la captura de datos con sistemas de topografia LiDARit",
    "descriptionLarge": "Lidarit Manager es una aplicación movil que permite a los usuarios que tengan un sistema Lidarit de topografia, gestionar el paso a paso que necesita el sistema hacer antes y despues de la captura de datos en campo, la aplicación permite a los usuarios crear nuevos proyectos, conectarse al sistema Lidarit y ver los datos capturados en campo.",
    "technologies": ["Ionic", "UX/UI"],
    "imagePaths": ["assets/projects/lidarit-1.png", "assets/projects/lidarit-2.png"],
    "publicUrl": "",
    "videoUrl": "assets/projects/lidarit.mp4",
    "githubUrl": "",
    "importance": 4
  }, {
    "id": 6,
    "name": "Cursos",
    "description": "Diseño UX/UI de una plataforma de cursos online",
    "descriptionLarge": "Se diseño la interfaz de usuario y experiencia de usuario de una plataforma de cursos online, dentro del diseño se encuentra la pagina principal, la vista de los curos y la reproducción de los videos.",
    "technologies": ["UX/UI", "Html", "Css"],
    "imagePaths": ["assets/projects/Cursos-main.png"],
    "publicUrl": "",
    "videoUrl": "",
    "githubUrl": "",
    "importance": 2
  }, {
    "id": 7,
    "name": "Pasapalabras",
    "description": "Juego de pasapalabras especialmente diseñado para streaming",
    "descriptionLarge": "Pasapalabras es un juego de preguntas y respuestas en el que los concursantes deben adivinar palabras a partir de definiciones dadas por el presentador. El juego se puede hacer entre 1 o varias personas, se desarrolla en varias fases y el concursante que acumula más puntos al final de la partida es el ganador. El juego fue diseñado para ser usado en streaming por lo cual cada componente es independiente y se permite capturar por los programas de streaming. En esta primer versión no se tuvo en cuenta la base de datos, por lo cual las preguntas y respuestas son definidas por el presentador.",
    "technologies": ["Electron", "JS", "Html", "Css"],
    "imagePaths": ["assets/projects/Pasapalabras.png"],
    "publicUrl": "//TODO - FALTA AGREGRAR EL LINK DE GIT",
    "videoUrl": "",
    "githubUrl": "",
    "importance": 5
  }]


  technologies: string[][] = [["Angular", "angular.svg"], ["Ionic", "ionic.svg"], ["Sql", "sql.svg"], ["Java", "java.svg"], ["UX/UI", "ux-ui.svg"], ["Android", "android.svg"], ["Spring", "spring.svg"], ["Electron", "electron.svg"], ["TypeScript", "typescript.svg"], ["Html", "html.svg"], ["Css", "css.svg"], ["JS", "js.svg"]];

  filteredProjectIds: number[] = [];

  idAfter = 0;
  divWidth = '50%'; 

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.view = true;
    }, 500);
    this.onResize({ target: window });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    console.log(event.target.innerWidth);
    const maxWidth = 725; // Define el ancho máximo aquí
    if (event.target.innerWidth <= maxWidth) {
      this.divWidth = '100%';
    } else {
      this.divWidth = '50%';
    }
  }

  onFilterChange(event: any): void {
    if (event.value === 'Main') {
      this.filteredProjectIds = this.projects.filter(project => project.importance == 5).map(project => project.id);
      return;
    } else if (event.value === 'All') {
      this.filteredProjectIds = this.projects.map(project => project.id);
      return;
    } else {
      this.filteredProjectIds = this.projects
        .filter(project => project.technologies.includes(event.value))
        .map(project => project.id);
      return;
    }
  }

  searchIcon(tec: string): string {
    return this.technologies.find(technology => technology[0] === tec)![1];
  }

  openDescription(project: Project): void {
    if (this.idAfter != 0) {
      this.closeDescription(this.idAfter);
    }

    if (this.idAfter == project.id) {
      this.closeDescription(project.id);
      this.idAfter = 0;
    } else {
      this.openDescriptionProject(project);
    }
    this.focusOnElement(`#project-${project.id}`);
  }

  openDescriptionProject(project: Project): void {
    let elementDiv = this.elementRef.nativeElement.querySelector(`#project-${project.id}`);
    elementDiv.style.width = this.divWidth;
    if (this.projects[project.id - 1].imagePaths.length == 1) {
      let elementImg = this.elementRef.nativeElement.querySelector(`#img-project-${project.id}`);
      elementImg.style.height = "95%"
    } else {
      for (let indexJ = 0; indexJ < this.projects[project.id - 1].imagePaths.length; indexJ++) {
        let elementImg = this.elementRef.nativeElement.querySelector(`#img-project-${project.id}-`+indexJ);
        elementImg.style.height = "370px"
      }
    }
    let elementP = this.elementRef.nativeElement.querySelector(`#desc-project-${project.id}`);
    elementP.textContent = project.descriptionLarge;
    this.idAfter = project.id;
  }

  closeDescription(idProjectAfter: number): void {
    let elementDivAfter = this.elementRef.nativeElement.querySelector(`#project-${idProjectAfter}`);
    elementDivAfter.style.width = "250px"
    if (this.projects[idProjectAfter - 1].imagePaths.length == 1) {
      let elementImgAfter = this.elementRef.nativeElement.querySelector(`#img-project-${idProjectAfter}`);
      elementImgAfter.style.height = "140px"
    } else {
      for (let indexI = 0; indexI < this.projects[idProjectAfter - 1].imagePaths.length; indexI++) {
        let elementImg = this.elementRef.nativeElement.querySelector(`#img-project-${idProjectAfter}-`+indexI);
        elementImg.style.height = "140px"
      }
    }
    let elementPAfter = this.elementRef.nativeElement.querySelector(`#desc-project-${idProjectAfter}`);
    elementPAfter.textContent = this.projects[idProjectAfter - 1].description
  }

  focusOnElement(selector: string): void {
    const element = this.elementRef.nativeElement.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
