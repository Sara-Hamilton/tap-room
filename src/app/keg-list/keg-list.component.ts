import { Component } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {

  // constructor() { }
  //
  // ngOnInit() {
  // }

  kegs: Keg[] = [
    new Keg('Corona Extra', 'Corona', 4, 4.5),
    new Keg('Amber Ale', 'Full Sail', 6, 6),
    new Keg('Cascade Pilsner', 'Full Sail', 6, 6),
    new Keg('Black Butte Porter', 'Deschutes', 6, 5.2),
    new Keg('Mirror Pond Pale Ale', 'Deschutes', 6, 5),
    new Keg('Guiness Draught', 'Guiness', 7, 4.2)
  ]

  lowKegs: Keg[] = [];

  priceColor(currentKeg) {
    if (currentKeg.price >= 5) {
      return "table-warning";
    } else {
      return "table-success";
    }
  }

  alcoholContentColor(currentKeg) {
    if (currentKeg.alcoholContent >= 5) {
      return "text-danger";
    } else {
      return "text-secondary";
    }
  }

}
