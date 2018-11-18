import { JurosVO } from './../Model/jurosVO';
import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
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
    this.client.risco = 'A';
    this.client.juros = '0';
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
    if (this.client.risco === 'A') {
      this.client.juros = '0';
      this.juros = this.client.juros + '%';
    } else if (this.client.risco === 'B') {
      this.client.juros = '10';
      this.juros = this.client.juros + '%';
    } else {
      this.client.juros = '20';
      this.juros = this.client.juros + '%';
    }
  }


}
