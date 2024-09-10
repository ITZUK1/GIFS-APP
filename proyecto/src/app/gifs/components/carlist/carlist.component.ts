import { Component, Input, input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './carlist.component.html',
})
export class CarlistComponent {

  @Input ()
  public gifs : Gif[] = [];

}
