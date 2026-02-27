import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './all/header/header.component';
import { AboutMeComponent } from './all/about-me/about-me.component';
import { DescriptionMeComponent } from './all/description-me/description-me.component';
import { ContactMeComponent } from './all/contact-me/contact-me.component';
import { ProjectsComponent } from './all/projects/projects.component';
import { FilterProjectsPipe } from '../pipe/FilterProjectsPipe.pipe';
import { RecommendationsComponent } from './all/recommendations/recommendations.component';
import { FooterComponent } from './all/footer/footer.component';
import { HomeComponent } from './menu/home/home.component';
import { ServiceComponent } from './menu/service/service.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';
import { BlogComponent } from './menu/blog/blog.component';
import { TalkComponent } from './menu/talk/talk.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    DescriptionMeComponent,
    ContactMeComponent,
    ProjectsComponent,
    FilterProjectsPipe,
    RecommendationsComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    PortfolioComponent,
    BlogComponent,
    TalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
