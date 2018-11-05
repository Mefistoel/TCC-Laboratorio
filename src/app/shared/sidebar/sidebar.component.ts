import { Component, OnInit } from '@angular/core';
import { DatosInicialesService } from '../../services/datos-iniciales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _infoPagina: DatosInicialesService,
             private router: Router) {
  }

  ngOnInit() {
  }

}
