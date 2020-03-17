import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ListaItensComponent } from './lista-itens.component';
import { ListaItensRoutingModule } from './lista-itens-routing.module';
import {CommonModule} from '@angular/common';
import {CarouselConfig, CarouselModule, ModalModule} from 'ngx-bootstrap';
import {HttpService} from '../../services/http.service';

@NgModule({
  imports: [
    FormsModule,
    ListaItensRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    CarouselModule,
    ModalModule
  ],
  declarations: [ ListaItensComponent
  ],
  providers: [
    HttpService,
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false}}
  ]
})
export class ListaItensModule { }
