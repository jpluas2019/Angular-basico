import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  
  heroes : string[] = ['Spiderman', 'Iroman', 'Thor'];
  borrados : string = '';
  borrarHeroe(){
    console.log("Borrando....");
    this.borrados = this.heroes.shift() || '';

  }
}
