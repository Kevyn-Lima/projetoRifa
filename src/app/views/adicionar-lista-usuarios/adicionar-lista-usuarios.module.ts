import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {AdicionarListaUsuariosComponent} from './adicionar-lista-usuarios.component';
import { AdicionarListaUsuariosRoutingModule } from './adicionar-lista-usuarios-routing.module';
import {HttpService} from '../../services/http.service';
import {CommonModule} from '@angular/common';
import {AlertConfig, AlertModule} from 'ngx-bootstrap';
import {getAlertConfig} from '../notifications/alerts.component';

@NgModule({
  imports: [
    FormsModule,
    AdicionarListaUsuariosRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    AlertModule,
  ],
  declarations: [ AdicionarListaUsuariosComponent ],
  providers: [HttpService, { provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AdicionarListaUsuariosModule { }
