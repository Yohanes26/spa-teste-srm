import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    uriGetListaJuros = 'https://java-teste-srm.herokuapp.com/juros';
    uriSalvarCliente = 'https://java-teste-srm.herokuapp.com/cliente/salvar';

    constructor(
        private http: HttpClient
    ) { }

    getListaJuros() {
        return this.http.get<any>(this.uriGetListaJuros);
    }

    salvarCliente(cliente) {
        return this.http.post(this.uriSalvarCliente, cliente);
    }
}
