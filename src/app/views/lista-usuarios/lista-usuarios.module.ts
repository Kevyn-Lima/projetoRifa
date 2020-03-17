import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ListaUsuariosComponent } from './lista-usuarios.component';
import { ListaUsuariosRoutingModule } from './lista-usuarios-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ListaUsuariosRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ ListaUsuariosComponent ]
})
export class ListaUsuariosModule { }
