import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarListaItensComponent } from './editar-lista-itens.component';
import {AuthGuard} from '../guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: EditarListaItensComponent,
    data: {
      title: 'Editar Item'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarListaItensRoutingModule {}
