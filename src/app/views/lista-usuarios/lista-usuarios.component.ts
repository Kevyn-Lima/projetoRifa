import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {error} from 'selenium-webdriver';

@Component({
  templateUrl: 'lista-usuarios.component.html'
})
export class ListaUsuariosComponent implements OnInit {

    page: any = {
      num: null,
      total: null
    };
   users: any;
   id = 1;

   constructor(public http: HttpService) {}
    ngOnInit(): void {
     this.getUsuarios();
    }
    getUsuarios() {
     let i;
     this.http.get("/user/all").subscribe((res: any) => {
       this.users = res.content;
       this.page.total = res.totalPages;
       this.page.num = res.number;
       console.log(res);
       console.log(res.content);
        for (i = 0; i < res.content.length; i++) {
          console.log(res.content[i].name);
        }
     },
       (error: any) => {
       console.log(error.message);
       }
       );
    }
    pageUsers(page) {
     let i;
      this.http.get("/user/all?page=" + page).subscribe((resUser: any) => {
        this.users = resUser.content;
        this.page.total = resUser.totalPages;
        this.page.num = resUser.number;
        console.log(resUser);
        console.log(resUser.content);
        for (i = 0; i < resUser.content.length; i ++ ) {
            console.log(resUser.content[i].name);
        }
      },
        (error: any) => {
        console.log(error);
        }
        );
   }


}
