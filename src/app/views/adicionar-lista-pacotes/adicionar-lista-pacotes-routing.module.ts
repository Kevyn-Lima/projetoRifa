import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarListaPacotesComponent } from './adicionar-lista-pacotes.component';

const routes: Routes = [
  {
    path: '',
    component: AdicionarListaPacotesComponent,
    data: {
      title: 'Adicionar Pacote'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarListaPacotesRoutingModule {}
