import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'adicionar-lista-itens.component.html',
  styleUrls: ['./adicionar-lista-itens.component.css']
})
export class AdicionarListaItensComponent implements OnInit {

  id: any = {};
  item: any = {};
  images: any;

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}

  salvar(form) {
    form.value.owner = {id: 21};
    console.log(this.images);
    this.http.post( "/item/register", form.value).subscribe((res: any) => {
        console.log(res);
        if (this.images !== undefined) {
        const formData = new FormData();
        for (const img of this.images) {
          formData.append('file', img);
          formData.append('item', res.id);
        }
        }
        this.router.navigateByUrl('/lista-itens');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onChange(event) {
    this.images = event.target.files;
  }
}
