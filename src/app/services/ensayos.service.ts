import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Transformador} from '../Models/TransformadorModel';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnsayosService {
  _infoPagina = 'https://localhost:44363';
  constructor(private http: Http) {}
   // #region Transformadores
   trafosUrl = `${this._infoPagina}/api/transformadores`;
   // Insertar
   nuevoTrafo(trafo: Transformador) {
    const body = JSON.stringify(Transformador);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.trafosUrl, trafo , {headers} )
       .pipe(
              map( res => {
              return res.json();
              })
            );
   }
   // Actualizar
   actualizarTrafo(trafo: Transformador) {
    const body = JSON.stringify(trafo);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put( this.trafosUrl, trafo , {headers} )
       .pipe(
              map( res => {
              return res.json();
              })
            );
  }
  // Obtener 1 trafo
  getTrafo(id$: number) {
    const url = `${this.trafosUrl}/${id$}`;
    return this.http.get(url).pipe(
      map (res => res.json())
    );
  }
  getListarTrafos() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.trafosUrl}/listar`;
    // console.log(url);
    return this.http.get(url).pipe(
      map( res => {
        // console.log(res.json());
        return res.json();
        })
    );
  }
  borrarTrafo(id$: number) {
    const url = `${this.trafosUrl}${id$}`;
    return this.http.delete(url).pipe(
      map (res => res.json())
    );
  }
  // #endregion Transformadores

}
