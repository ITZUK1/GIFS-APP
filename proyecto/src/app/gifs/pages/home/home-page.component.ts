import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomeComponent {

constructor (private gifService: GifsService){}
get gifs (): Gif[]{
  return this.gifService.giflist;
}


}
