import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {error} from 'selenium-webdriver';

@Component({
  templateUrl: 'lista-pacotes.component.html'
})
export class ListaPacotesComponent implements OnInit {

    page: any = {
      num: null,
      total: null
    };
   pacotes: any;
   id = 1;

   constructor(public http: HttpService) {}
    ngOnInit(): void {
     this.getPacotes();
    }
    getPacotes() {
     let i;
     this.http.get("/package/all").subscribe((resPack: any) => {
       this.pacotes = resPack.content;
       this.page.total = resPack.totalPages;
       this.page.num = resPack.number;
       console.log(resPack);
       console.log(resPack.content);
     },
       (error: any) => {
       console.log(error.message);
       }
       );
    }
    pagePack(page) {
     let i;
      this.http.get("/package/all?page=" + page).subscribe((resPackage: any) => {
        this.pacotes = resPackage.content;
        this.page.total = resPackage.totalPages;
        this.page.num = resPackage.number;
        console.log(resPackage);
        console.log(resPackage.content);
        for (i = 0; i < resPackage.content.length; i ++ ) {
            console.log(resPackage.content[i].name);
        }
      },
        (error: any) => {
        console.log(error);
        }
        );
   }


}
