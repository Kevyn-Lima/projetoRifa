import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ListaPacotesComponent } from './lista-pacotes.component';
import { ListaPacotesRoutingModule } from './lista-pacotes-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ListaPacotesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ ListaPacotesComponent ]
})
export class ListaPacotesModule { }
