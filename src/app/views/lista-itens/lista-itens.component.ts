import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ModalDirective} from 'ngx-bootstrap';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent implements OnInit {

  @ViewChild('primaryModal') public primaryModal: ModalDirective; primaryModal1: ModalDirective;

    page: any = {
      num: null,
      total: null
    };
   item: any;
   itens: any;
   id = 1;
   ticket: any;
   sorteios: any;

   constructor(public http: HttpService, location: Location) {}
    ngOnInit(): void {
     this.getItens();
    }
    getItens() {
     let i;
     this.http.get("/item/all").subscribe((res: any) => {
       this.itens = res.content;
       this.page.total = res.totalPages;
       this.page.num = res.number;
       console.log(res);
       console.log(res.content);
        for (i = 0; i < res.content.length; i++) {
          console.log(res.content[i].title);
        }
     },
       (error: any) => {
       console.log(error.message);
       }
       );
    }
    showImages(item) {
    this.item = item;
    this.primaryModal.show();
    }
    pageItens(page) {
     let i;
      this.http.get("/item/all?page=" + page).subscribe((resItem: any) => {
        this.itens = resItem.content;
        this.page.total = resItem.totalPages;
        this.page.num = resItem.number;
        console.log(resItem);
        for (i = 0; i < resItem.length; i ++ ) {
            console.log(resItem[i].name);
        }
      },
        (error: any) => {
        console.log(error.message);
        }
        );
   }
  onCancelItem(item) {
    this.http.get("/item/cancel/" + item.id).subscribe((resItem: any) => {
      console.log(resItem);
    });
  }
  refresh() {
     location.reload();
  }
  tickets(item) {
    this.http.get('/ticket/item/' + item.id).subscribe((resTicket: any) => {
      console.log(resTicket);
      this.ticket = resTicket;
    });
  }
  sorteio(item) {
     this.http.get('/item/sortear/' + item.id).subscribe((resSorteio: any) => {
       console.log(resSorteio);
       this.sorteios = resSorteio;
     });

  }

}
