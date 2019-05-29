import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HedderComponent } from './Component/hedder/hedder.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    HedderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
