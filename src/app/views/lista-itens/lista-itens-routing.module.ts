import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaItensComponent } from './lista-itens.component';

const routes: Routes = [
  {
    path: '',
    component: ListaItensComponent,
    data: {
      title: 'Lista de Itens'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaItensRoutingModule {}
