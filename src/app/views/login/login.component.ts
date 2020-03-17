import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  erro: any;
  constructor (private http: HttpService, private router: Router) {}
  logar (form) {
    localStorage.removeItem("token");
    this.http.post( "/user/login", form.value).subscribe((res: any) => {
        console.log(res);
        console.log(res.name);
        console.log(res.status.tag);
        console.log(res.token);
        console.log(res.group.tag);
        if (res.status.tag === 'ATIVO' && res.group.tag === 'ADMIN') {
          localStorage.setItem('token', res.token);
           this.router.navigateByUrl('/dashboard');
        } else {
          console.log('não pôde logar ');
        }
      },
      (error: any) => {
      this.erro = true;
        console.log(error);
      }
    );
  }
}

