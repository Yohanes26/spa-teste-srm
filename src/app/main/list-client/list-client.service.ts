import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ListClientService {

    uriGetListaClientes = 'https://java-teste-srm.herokuapp.com/client?callback=JSONP_CALLBACK';

    constructor(
        private http: HttpClient,
        private jsonp: Jsonp
    ) { }

    getListaClientes() {
        // tslint:disable-next-line:no-unused-expression
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.get(this.uriGetListaClientes, { headers, observe: 'response' }).subscribe((res) => console.log(res));
       /*  return this.jsonp
            .get(this.uriGetListaClientes)
            .subscribe(
                (data) => {
                    console.log(data.json());
                },
                (error) => {
                    console.log(error);
                }); */
    }
}
