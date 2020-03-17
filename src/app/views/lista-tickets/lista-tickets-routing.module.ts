import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTicketsComponent } from './lista-tickets.component';
import {AuthGuard} from '../guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: ListaTicketsComponent,
    data: {
      title: 'Lista de Tickets'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTicketsRoutingModule {}
