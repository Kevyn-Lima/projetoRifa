import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarListaUsuariosComponent } from './adicionar-lista-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AdicionarListaUsuariosComponent,
    data: {
      title: 'Adicionar Usuario'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarListaUsuariosRoutingModule {}
