import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';


@Component({
  templateUrl: 'adicionar-lista-pacotes.component.html',
  styleUrls: ['./adicionar-lista-pacotes.component.css']
})
export class AdicionarListaPacotesComponent implements OnInit {

  id: any = {};
  erro = false;

  constructor(private http: HttpService, private router: Router) { }
  ngOnInit(): void {}

  salvar(form) {
    form.value.status = {id: 1};
    form.value.bonus = 0;
    if (form.valid) {
      console.log(form.value);
      this.http.post( '/package/save', form.value).subscribe((res: any) => {
        console.log(res);
          this.router.navigateByUrl('/lista-pacotes');
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
