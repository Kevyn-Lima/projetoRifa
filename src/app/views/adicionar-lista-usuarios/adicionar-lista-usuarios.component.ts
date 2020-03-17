import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';


@Component({
  templateUrl: 'adicionar-lista-usuarios.component.html',
  styleUrls: ['./adicionar-lista-usuarios.component.css']
})
export class AdicionarListaUsuariosComponent implements OnInit {

  id: any = {};
  erro = false;

  constructor(private http: HttpService, private router: Router) { }
  ngOnInit(): void {}

  salvar(form) {
    if (form.valid) {
      console.log(form.value);
      console.log(form.value.status);
      this.http.post( '/user/register/admin', form.value).subscribe((res: any) => {
        console.log(res);
          this.router.navigateByUrl('/lista-usuarios');
        },
        (error: any) => {
          this.erro = true;
          console.log(error);
        }
      );
    }
    console.log(form.valid);
  }

}
