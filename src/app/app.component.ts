import { Component } from '@angular/core';
import { DatosInicialesService } from './services/datos-iniciales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infoPagina: DatosInicialesService) {}
}
