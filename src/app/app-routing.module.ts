import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { BiblioComponent } from './biblio/biblio.component';
import { HomeComponent } from './home/home.component';
import { MagazineComponent } from './magazine/magazine.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'biblio', component: BiblioComponent},
  {path: 'biblio/:book', component: BiblioComponent},
  {path: 'magazines', component: MagazineComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
