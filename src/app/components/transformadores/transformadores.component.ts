import { Component, OnInit } from '@angular/core';
import {EnsayosService} from '../../services/ensayos.service';
import { Transformador } from '../../Models/TransformadorModel';


@Component({
  selector: 'app-transformadores',
  templateUrl: './transformadores.component.html',
  styleUrls: ['./transformadores.component.css']
})
export class TransformadoresComponent implements OnInit {
  trafos: Transformador[];
  constructor(private _EnsayosService: EnsayosService) {

    this._EnsayosService.getListarTrafos().subscribe(data => {
      this.trafos = data;
    });
  }

  ngOnInit() {
  }

}
