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
    new Keg('Mirror Pond Pale Ale', 'Deschutes', 6, 5),
    new Keg('Guiness Draught', 'Guiness', 7, 4.2)
  ]

  lowKegs: Keg[] = [];

  priceColor(currentKeg) {
    if (currentKeg.price >= 5) {
      return "table-success";
    } else {
      return "table-warning";
    }
  }

  alcoholContentColor(currentKeg) {
    if (currentKeg.alcoholContent >= 5) {
      return "table-primary";
    } else {
      return "table-info";
    }
  }

  selectedKeg = null;
  addingKeg = null;
  showingLowInventory = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  pourPint(clickedKeg) {
    clickedKeg.pintsRemaining -= 1;
  }

  showAddKegForm() {
    this.addingKeg = true;
  }

  addKeg(beerName, beerBrand, price, alcoholContent) {
    this.addingKeg = null;
    let newKeg = new Keg(beerName, beerBrand, price, alcoholContent);
    this.kegs.push(newKeg);
  }

  showLowKegs() {
    this.showingLowInventory = true;
    for (let i = 0; i < this.kegs.length; i++) {
      if (this.kegs[i].pintsRemaining < 10) {
        this.lowKegs.push(this.kegs[i])
      }
    }
  }

  hideLowKegs() {
    this.showingLowInventory = null;
  }

  refillKeg(clickedKeg) {
    clickedKeg.pintsRemaining = 124;
  }

  deleteKeg(clickedKeg) {
    this.kegs = this.kegs.filter(Keg => Keg !== clickedKeg);
  }

}
