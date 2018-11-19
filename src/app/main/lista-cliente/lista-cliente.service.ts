import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ListaClienteService {

    uriGetListaClientes = 'https://java-teste-srm.herokuapp.com/cliente';

    constructor(
        private http: HttpClient
    ) { }

    getListaClientes() {
        return this.http.get<any>(this.uriGetListaClientes);
    }
}
