import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../services/http.service';
import {error} from 'selenium-webdriver';

@Component({
  templateUrl: 'lista-tickets.component.html'
})
export class ListaTicketsComponent implements OnInit {
  page: any = {
    num: null,
    total: null
  };
  tickets: any;
  id = 1;
  constructor(private http: HttpService) {}
  ngOnInit(): void {
    this.getTickets();
  }
  getTickets() {
    let i;
    this.http.get("/ticket/all").subscribe((res: any) => {
    this.tickets = res.content;
    this.page.total = res.totalPages;
    this.page.num = res.number;
    console.log(res);
    console.log(res.content);
      for (i = 0; i < res.content.length; i++) {
      console.log(res.content[i].item.title);
      }
    },
      (error: any) => {
      console.log(error.message);
      });
  }
  pageTickets(page) {
    let i;
    this.http.get("/ticket/all?page=" + page).subscribe((res: any) => {
      this.tickets = res.content;
      this.page.total = res.totalPages;
      this.page.num = res.number;
      console.log(res);
      for (i = 0; i < res.length; i++) {
       console.log(res[i].item.title);
      }

    },
      (error: any) => {
      console.log(error.message);
      });
  }
}
