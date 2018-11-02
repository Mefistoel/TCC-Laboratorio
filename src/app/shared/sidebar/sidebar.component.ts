import { Component, OnInit } from '@angular/core';
import { DatosInicialesService } from '../../services/datos-iniciales.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _infoPagina: DatosInicialesService) {
  }

  ngOnInit() {
  }

}
