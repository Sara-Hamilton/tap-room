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
