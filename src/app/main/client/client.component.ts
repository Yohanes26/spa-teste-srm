import { Component, OnInit } from '@angular/core';

import { ClientService } from './client.service';

import { JurosVO } from './../Model/jurosVO';
import { ClientVO } from '../Model/clientVO';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  juros;
  listaJuros: JurosVO[] = [];
  client: ClientVO = new ClientVO();

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.getListaJuros();
    this.client.risco = this.listaJuros[0].risco;
    this.client.juros = this.listaJuros[0].juros;
    this.juros = this.client.juros + '%';
  }

  getListaJuros() {
    this.clientService.getListaJuros().subscribe((res) => {
      console.log(res);
      this.listaJuros = res;
    }, (err) => {

    });
  }

  setValorRisco(riscoSelecionado) {
    this.client.risco = riscoSelecionado;
    this.setJuros();
  }

  setJuros() {
    if (this.client.risco === this.listaJuros[0].risco) {
      this.client.juros = this.listaJuros[0].juros;
      this.juros = this.client.juros + '%';
    } else if (this.client.risco === this.listaJuros[1].risco) {
      this.client.juros = this.listaJuros[1].juros;
      this.juros = this.client.juros + '%';
    } else {
      this.client.juros = this.listaJuros[2].juros;
      this.juros = this.client.juros + '%';
    }
  }


}
