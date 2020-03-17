import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTransacaoComponent } from './lista-transacao.component';
import {AuthGuard} from '../guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: ListaTransacaoComponent,
    data: {
      title: 'Lista de Transações'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTransacaoRoutingModule {}
