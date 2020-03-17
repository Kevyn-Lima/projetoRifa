import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
    export class HttpService {
  url = "http://marketflex.com.br:8080";
  constructor(private http: HttpClient) {}
    getUrl() {
      return this.url;
    }
    getAutorization() {
      if (localStorage.getItem("token")) {
        return {authorization: "Bearer " + localStorage.getItem("token")};
      } else {
        return {};
      }
    }
    get(url) {
      return this.http.get(this.url.concat(url), {headers: this.getAutorization()});
      }
      post(url, data) {
      return this.http.post(this.url.concat(url), data, {headers: this.getAutorization()});
      }
    public postUpload (url, data) {
      const options = {
        headers: new HttpHeaders(this.getAutorization()),
        params: new HttpParams(),
        reportProgress: true
      };
      const req = new HttpRequest('POST', this.url + url, data, options);
      return this.http.request(req);
     }
}
