import { Injectable } from '@angular/core';
import { DatosEmpresa } from '../interfaces/datos.empresa';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/datos.usuario';
import { Modulos } from '../interfaces/menu-principal';

@Injectable({
  providedIn: 'root'
})
export class DatosInicialesService {
  cargado = false;
  info: DatosEmpresa = {};
  usuario: Usuario = {};
  modulos: Modulos[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarDatosUsuario();
    this.cargarMenuPrincipal();
   }

  public cargarInfo () {
    // Leer archivo Json
    this.http.get('assets/data/datos-empresa.json')
             .subscribe((resp: DatosEmpresa) => {
               this.cargado = true;
               this.info = resp;
               // console.log('Servicio Listo..');
               // console.log(this.info);
             });
   }
   private cargarDatosUsuario() {
    // Leer archivo Json
    this.http.get('assets/data/datos-usuario.json')
             .subscribe((resp: Usuario) => {
               this.cargado = true;
               this.usuario = resp;
               // console.log('Servicio Listo..');
               // console.log(this.usuario);
             });
   }
   private cargarMenuPrincipal() {
    // Leer archivo Json
    this.http.get('assets/data/menu-principal.json')
             .subscribe((resp: Modulos[]) => {
               this.cargado = true;
               this.modulos = resp;
               // console.log('Servicio Listo..');
               // console.log(this.modulos);
             });
   }
}
