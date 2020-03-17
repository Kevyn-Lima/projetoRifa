import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {AdicionarListaPacotesComponent} from './adicionar-lista-pacotes.component';
import { AdicionarListaPacotesRoutingModule } from './adicionar-lista-pacotes-routing.module';
import {HttpService} from '../../services/http.service';
import {CommonModule} from '@angular/common';
import {AlertConfig, AlertModule} from 'ngx-bootstrap';
import {getAlertConfig} from '../notifications/alerts.component';

@NgModule({
  imports: [
    FormsModule,
    AdicionarListaPacotesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    AlertModule,
  ],
  declarations: [ AdicionarListaPacotesComponent ],
  providers: [HttpService, { provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AdicionarListaPacotesModule { }
