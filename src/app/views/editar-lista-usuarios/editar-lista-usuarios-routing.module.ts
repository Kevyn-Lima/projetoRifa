import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarListaUsuariosComponent } from './editar-lista-usuarios.component';
import {AuthGuard} from '../guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: EditarListaUsuariosComponent,
    data: {
      title: 'Editar Usuario'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarListaUsuariosRoutingModule {}
