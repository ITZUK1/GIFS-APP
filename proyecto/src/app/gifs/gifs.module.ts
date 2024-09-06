import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CarlistComponent } from './components/carlist/carlist.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CarlistComponent,
  ],
  imports: [
    CommonModule 
  ],
  exports:[
    HomeComponent,
  ]
})
export class GifsModule { }
