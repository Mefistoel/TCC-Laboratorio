import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoremComponent } from './ejemplos/lorem/lorem.component';
import { GraphEnsayosRealizadosComponent } from './graph/graph-ensayos-realizados/graph-ensayos-realizados.component';
import { PersonasComponent } from './components/personas/personas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { RolesComponent } from './components/roles/roles.component';
import { MenusComponent } from './components/menus/menus.component';
import { AppRoutingModule } from './app-routing.module';
import { ModulosComponent } from './components/modulos/modulos.component';
import { LaboratoristasComponent } from './components/laboratoristas/laboratoristas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FiscalesComponent } from './components/fiscales/fiscales.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { UsuRolesComponent } from './components/usu-roles/usu-roles.component';
import { EnsayosComponent } from './components/ensayos/ensayos.component';
import { TransformadoresComponent } from './components/transformadores/transformadores.component';

// Servicions
import { DatosInicialesService } from './services/datos-iniciales.service';

import { EnsayosService } from './services/ensayos.service';
import { EjemplosComponent } from './components/ejemplos/ejemplos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoremComponent,
    GraphEnsayosRealizadosComponent,
    PersonasComponent,
    UsuariosComponent,
    FormulariosComponent,
    RolesComponent,
    MenusComponent,
    ModulosComponent,
    LaboratoristasComponent,
    ClientesComponent,
    FiscalesComponent,
    PermisosComponent,
    UsuRolesComponent,
    EnsayosComponent,
    TransformadoresComponent,
    EjemplosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [EnsayosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
