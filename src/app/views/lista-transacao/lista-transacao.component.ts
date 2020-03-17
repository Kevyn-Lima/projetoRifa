import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {error} from 'selenium-webdriver';
import {any} from 'codelyzer/util/function';

@Component({
  templateUrl: 'lista-transacao.component.html'
})
export class ListaTransacaoComponent implements OnInit {

    page: any = {
      num: null,
      total: null
    };
   transacao: any;

   constructor(public http: HttpService) {}
    ngOnInit(): void {
     this.getTransacao();
    }
    getTransacao() {
     let i;
     this.http.get("/transaction/all").subscribe((res: any) => {
       this.transacao = res.content;
       this.page.total = res.totalPages;
       this.page.num = res.number;
        console.log(res);
       console.log(res.content);
        for (i = 0; i < res.content.length; i++) {
          console.log(res.content[i].pack.title);
        }
     },
       (error: any) => {
       console.log(error.message);
       }
       );
    }
    pageTransacao(page) {
     let i;
      this.http.get("/transaction/all?page=" + page).subscribe((resTrans: any) => {
        this.transacao = resTrans.content;
        this.page.total = resTrans.totalPages;
        this.page.num = resTrans.number;
        console.log(resTrans);
        console.log(resTrans.content);
        for (i = 0; i < resTrans.content.length; i ++ ) {
            console.log(resTrans.content[i].pack.title);
        }
      },
        (error: any) => {
        console.log(error);
        }
        );
   }
   onConfirmCancel(can) {
     this.http.get("/pagseguro/cancel/" + can.code).subscribe((resCan: any) => {
       console.log(resCan);
       this.transacao = this.transacao.map((t: any) => {
         if (t.id == resCan.id) {
           t = resCan;
         }
         return t;
       });
     });
   }
   onRefresh(ref) {
     this.http.get("/pagseguro/att/" + ref.code).subscribe((resRef: any) => {
       console.log(resRef);
       this.transacao = this.transacao.map((t: any) => {
         if (t.id == resRef.id) {
           t = resRef;
         }
         return t;
       });
     });
   }
   onChargeBack(est) {
     this.http.get("/pagseguro/refund/" + est.code).subscribe((resEst: any) => {
       console.log(resEst);
       this.transacao = this.transacao.map((t: any) => {
         if (t.id == resEst.id) {
           t = resEst;
         }
         return t;
       });
     });
   }

}
