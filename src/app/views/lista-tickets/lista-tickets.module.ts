import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ListaTicketsComponent } from './lista-tickets.component';
import { ListaTicketsRoutingModule } from './lista-tickets-routing.module';
import {HttpService} from '../../services/http.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ListaTicketsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ ListaTicketsComponent ],
  providers: [HttpService]
})
export class ListaTicketsModule { }
