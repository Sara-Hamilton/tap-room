import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "lowInventory",
  pure: false
})

export class LowInventoryPipe implements PipeTransform {
  transform(input: Keg[], desiredInventoryView) {
    var output: Keg[] = [];
    if(desiredInventoryView === "lowKegs") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining < 32) {
          output.push(input[i])
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
