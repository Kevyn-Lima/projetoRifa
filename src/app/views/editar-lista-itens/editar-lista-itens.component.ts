import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef, ModalDirective} from 'ngx-bootstrap';

@Component({
  templateUrl: 'editar-lista-itens.component.html',
  styleUrls: ['./editar-lista-itens.component.css']
})
export class EditarListaItensComponent implements OnInit {
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;
  item: any = {};
  image: any = {};
  images: any = {};



  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this.http.get("/item/info/" + this.route.snapshot.params.id).subscribe((res: any) => {
      console.log(res);
      this.item = res;
    });
  }

  salvar(form) {
    console.log(form.value.status);
    this.item.title = form.value.title;
    this.item.description = form.value.description;
    this.item.price = form.value.price;
    if (typeof form.value.status === "string") {
      this.item.status = {id: Number(form.value.status)};
    }
    this.http.post("/item/update", this.item).subscribe((res: any) => {
      if (this.images !== undefined) {
        const formData = new FormData();
        for (const img of this.images) {
          formData.append('file', img);
          formData.append('item', res.id);
        }
        this.http.postUpload('/item/upload', formData).subscribe((resUpload: any) => {
          console.log('resUpload', resUpload);
          this.router.navigateByUrl('/lista-itens');
        }, e => console.log(e));
      }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  showImage(img) {
    this.image = img;
    this.largeModal.show();
  }

  onConfirmDelete(img) {
    this.image = img;
    this.http.get('/item/remove-image/' + img.id).subscribe((resDel: any) => {
    console.log(resDel);
    this.item.images = this.item.images.filter((i) => i.id !== img.id);
      }
    );
  }
  onChange(event) {
    this.images = event.target.files;
  }
}
