
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { GraphEnsayosRealizadosComponent } from './graph/graph-ensayos-realizados/graph-ensayos-realizados.component';
import { MenusComponent } from './components/menus/menus.component';
import { PersonasComponent } from './components/personas/personas.component';
import { RolesComponent } from './components/roles/roles.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { LaboratoristasComponent } from './components/laboratoristas/laboratoristas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FiscalesComponent } from './components/fiscales/fiscales.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { UsuRolesComponent } from './components/usu-roles/usu-roles.component';
import { EnsayosComponent } from './components/ensayos/ensayos.component';
import {TransformadoresComponent} from './components/transformadores/transformadores.component';

const app_routes: Routes = [
    { path: 'principal', component: GraphEnsayosRealizadosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'formularios', component: FormulariosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'fiscales', component: FiscalesComponent },
    { path: 'modulos', component: ModulosComponent },
    { path: 'permisos', component: PermisosComponent },
    { path: 'menus', component: MenusComponent },
    { path: 'personas', component: PersonasComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'usu-roles', component: UsuRolesComponent },
    { path: 'ensayos', component: EnsayosComponent },
    { path: 'laboratoristas', component: LaboratoristasComponent },
    { path: 'transformadores', component: TransformadoresComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'principal'}

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [ RouterModule ],
    providers: [],
})
export class AppRoutingModule {}
