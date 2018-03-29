import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TAP ROOM';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Corona Extra', 'Corona', 4, 4.5),
    new Keg('Amber Ale', 'Full Sail', 6, 6),
    new Keg('Cascade Pilsner', 'Full Sail', 6, 6),
    new Keg('Black Butte Porter', 'Deschutes', 6, 5.2),
    new Keg('Mirror Pond Pale Ale', 'Deschutes', 6, 5),
    new Keg('Guiness Draught', 'Guiness', 7, 4.2)
  ]

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  pourPint(clickedKeg) {
    clickedKeg.pintsRemaining -= 1;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  refillKeg(clickedKeg) {
    clickedKeg.pintsRemaining = 124;
  }

  deleteKeg(clickedKeg) {
    this.masterKegList = this.masterKegList.filter(Keg => Keg !== clickedKeg);
  }

}
