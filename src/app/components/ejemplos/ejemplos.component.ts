import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#texto2').val('Hola soy un texto');
    // document.getElementById('texto1').value = 'Hola';
    // $('#datatable').DataTable();
  }

  ponerTexto2() {
    $('#texto1').val('Hola soy un texto2');
  }

}
