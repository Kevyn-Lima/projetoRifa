import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'editar-lista-usuarios.component.html',
  styleUrls: ['./editar-lista-usuarios.component.css']
})
export class EditarListaUsuariosComponent implements OnInit {

  usuario: any = {};

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.http.get("/user/info/ " + this.route.snapshot.params.id).subscribe((res: any) => {
      console.log(res);
      this.usuario = res;
    });
  }

  salvar(form) {
    form.value.id = this.usuario.id;
    if (typeof form.value.status === "string" ) {
      form.value.status = {id: Number(form.value.status)};
    }
    if ( typeof form.value.group === "string") {
      form.value.group = {id: Number(form.value.group)};
    }
    console.log(form.value.status);
    console.log(form.value.group);
    this.http.post( "/user/update", form.value).subscribe((res: any) => {
        console.log(res.name);
        console.log(res.status.tag);
        console.log(res.group.tag);
        this.router.navigateByUrl('/lista-usuarios');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
