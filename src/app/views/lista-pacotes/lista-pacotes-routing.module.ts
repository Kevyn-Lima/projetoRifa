import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPacotesComponent } from './lista-pacotes.component';
import {AuthGuard} from '../guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: ListaPacotesComponent,
    data: {
      title: 'Tabela de Pacotes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPacotesRoutingModule {}
