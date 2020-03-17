import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { EditarListaPacotesComponent } from './editar-lista-pacotes.component';
import { EditarListaPacotesRoutingModule } from './editar-lista-pacotes-routing.module';
import {CommonModule} from '@angular/common';
import {HttpService} from '../../services/http.service';

@NgModule({
  imports: [
    FormsModule,
    EditarListaPacotesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ EditarListaPacotesComponent ],
  providers: [HttpService]
})
export class EditarListaPacotesModule { }
