import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-hedder',
  template: `<h1>{{t}} </h1>
       <ul>
       <li *ngFor = "let cos of cos"><h6>{{cos}}</h6> </li>
       
       </ul>
       <img src = "{{imgUrl}}" />
  `,
  styleUrls: ['./hedder.component.css']
})
export class HedderComponent{

t= "Hello World!";
cos;
imgUrl = "http://lorempixel.com/800/600"
constructor(service : CoursesService){

this.cos = service.getCourses();
}


}
