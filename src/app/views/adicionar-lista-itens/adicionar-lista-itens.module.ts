import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AdicionarListaItensComponent } from './adicionar-lista-itens.component';
import { AdicionarListaItensRoutingModule } from './adicionar-lista-itens-routing.module';
import {HttpService} from '../../services/http.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    AdicionarListaItensRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ AdicionarListaItensComponent ],
  providers: [HttpService]
})
export class AdicionarListaItensModule { }
