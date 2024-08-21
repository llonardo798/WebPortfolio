import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';
import { ServiceComponent } from './menu/service/service.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';
import { TalkComponent } from './menu/talk/talk.component';
import { BlogComponent } from './menu/blog/blog.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: TalkComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
