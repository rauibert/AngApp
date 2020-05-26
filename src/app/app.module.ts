import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ComicsComponent } from './comics/comics.component';

@NgModule({
  declarations: [
    AppComponent,
    BiblioComponent,
    ComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
