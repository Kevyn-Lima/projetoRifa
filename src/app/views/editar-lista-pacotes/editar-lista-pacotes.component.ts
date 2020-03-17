import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'editar-lista-pacotes.component.html',
  styleUrls: ['./editar-lista-pacotes.component.css']
})
export class EditarListaPacotesComponent implements OnInit {

  package: any = {};

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getPack();
  }
  getPack() {
    this.http.get("/package/info/ " + this.route.snapshot.params.id).subscribe((res: any) => {
      console.log(res);
      this.package = res;
    });
  }

  salvar(form) {
    form.value.id = this.package.id;
    form.value.bonus = 0;
    if (typeof form.value.status === "string" ) {
      form.value.status = {id: Number(form.value.status)};
    }
    console.log(form.value);
    this.http.post( "/package/save", form.value).subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/lista-pacotes');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
