import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ListClientService {

    uriGetListaClientes = 'https://java-teste-srm.herokuapp.com/client';

    constructor(
        private http: HttpClient
    ) { }

    getListaClientes() {
        return this.http.get<any>(this.uriGetListaClientes);
    }
}
