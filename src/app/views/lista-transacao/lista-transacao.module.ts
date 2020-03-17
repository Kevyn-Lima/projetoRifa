import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ListaTransacaoComponent } from './lista-transacao.component';
import { ListaTransacaoRoutingModule } from './lista-transacao-routing.module';
import {CommonModule} from '@angular/common';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    ListaTransacaoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    ModalModule
  ],
  declarations: [ ListaTransacaoComponent ]
})
export class ListaTransacaoModule { }
