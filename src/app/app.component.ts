import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  kegs: Keg[] = [
    new Keg('Corona Extra', 'Corona', 4, 4.5),
    new Keg('Amber Ale', 'Full Sail', 6, 6),
    new Keg('Cascade Pilsner', 'Full Sail', 6, 6),
    new Keg('Black Butte Porter', 'Deschutes', 6, 5.2),
    new Keg('Mirror Pond Pale Ale', 'Deschutes', 6, 5)
  ]
}
