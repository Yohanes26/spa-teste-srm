import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    uriGetListaJuros = 'https://java-teste-srm.herokuapp.com/juros?callback=JSONP_CALLBACK';
    uriSaveClient = 'https://java-teste-srm.herokuapp.com/client/save?callback=JSONP_CALLBACK';

    constructor(
        private http: HttpClient
    ) { }

    getListaJuros() {
        return this.http.get<any>(this.uriGetListaJuros);
    }

    saveClient(client) {
        return this.http.post(this.uriSaveClient, client);
    }
}
