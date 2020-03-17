import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { EditarListaItensComponent } from './editar-lista-itens.component';
// @ts-ignore
import { EditarListaItensRoutingModule } from './editar-lista-itens-routing.module';
import {HttpService} from '../../services/http.service';
import {CommonModule} from '@angular/common';
import {CarouselModule, ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    EditarListaItensRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    CarouselModule,
    ModalModule
  ],
  declarations: [ EditarListaItensComponent ],
  providers: [HttpService]
})
export class EditarListaItensModule { }
