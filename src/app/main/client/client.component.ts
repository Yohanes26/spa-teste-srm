import { Component, OnInit } from '@angular/core';

import { ClientService } from './client.service';

import { JurosVO } from './../Model/jurosVO';
import { ClientVO } from '../Model/clientVO';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  juros;
  listaJuros: JurosVO[] = [];
  client: ClientVO = new ClientVO();
  formularioInvalido = false;
  loading = false;
  habilitarForm = false;

  constructor(
    private clientService: ClientService,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getListaJuros();
    this.client.risco = this.listaJuros[0].risco;
    this.client.juros = this.listaJuros[0].juros;
    this.juros = this.client.juros + '%';
  }

  getListaJuros() {
    this.clientService.getListaJuros().subscribe((res) => {
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

  salvarCliente(formValido) {
    if (formValido === true) {
      this.loading = true;
      this.clientService.saveClient(this.client).subscribe((res) => {
        this.loading = false;
        this.openSnackBar('Salvo com sucesso!', 'OK!');
        this.resetModel();
      }, (err) => {
        this.loading = false;
        this.openSnackBar('Erro ao tentar salvar!', 'OK!');
      });
    } else {
      this.formularioInvalido = false;
      this.openSnackBar('Formulário precisa ser preenchido!', 'OK!');
    }
    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }

  resetModel() {
    this.client.limiteCredito = '';
    this.client.nome = '';
    this.client.risco = this.listaJuros[0].risco;
    this.client.juros = this.listaJuros[0].juros;
    this.juros = this.listaJuros[0].juros + '%';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
