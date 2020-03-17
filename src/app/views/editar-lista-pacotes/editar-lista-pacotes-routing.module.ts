import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarListaPacotesComponent } from './editar-lista-pacotes.component';
import {AuthGuard} from '../guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: EditarListaPacotesComponent,
    data: {
      title: 'Editar Pacotes'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarListaPacotesRoutingModule {}
