import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { EditarListaUsuariosComponent } from './editar-lista-usuarios.component';
import { EditarListaUsuariosRoutingModule } from './editar-lista-usuarios-routing.module';
import {CommonModule} from '@angular/common';
import {HttpService} from '../../services/http.service';

@NgModule({
  imports: [
    FormsModule,
    EditarListaUsuariosRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ EditarListaUsuariosComponent ],
  providers: [HttpService]
})
export class EditarListaUsuariosModule { }
