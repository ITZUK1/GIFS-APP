import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar', // Cambia el selector a algo más estándar si es necesario
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Corregido a 'styleUrls'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {} // Corrige el nombre del parámetro a 'gifsService' para mayor claridad

  get tags(): string[] { // Asegúrate de que el tipo sea correcto
    return this.gifsService.tagsHistory; // Asumiendo que tagsHistory es una propiedad del servicio
  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag); // Llama al método del servicio para buscar la etiqueta
  }
}
