import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickedDelete = new EventEmitter();
  @Output() clickedRefill = new EventEmitter();
  @Output() clickedPour = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  deleteButtonClicked(kegToDelete: Keg) {
    this.clickedDelete.emit(kegToDelete);
  }

  refillButtonClicked(kegToRefill: Keg) {
    this.clickedRefill.emit(kegToRefill);
  }

  pourButtonClicked(kegToPour: Keg) {
    this.clickedPour.emit(kegToPour);
  }

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
