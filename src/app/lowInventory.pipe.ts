import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "lowInventory",
  pure: false
})

export class LowInventoryPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].pintsRemaining < 125) {
        output.push(input[i])
      }
    }
    return output;
  }

}
