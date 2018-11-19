import { Component, OnInit } from '@angular/core';

import { ClienteService } from './cliente.service';

import { JurosVO } from './../Model/jurosVO';
import { ClienteVO } from './../Model/clienteVO';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  juros;
  listaJuros: JurosVO[] = [];
  cliente: ClienteVO = new ClienteVO();
  formularioInvalido = false;
  loading = false;
  habilitarForm = false;
  habilitarTentarNovamente = false;
  habilitarSpinner = true;
  segundos = 20;

  constructor(
    private clienteService: ClienteService,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.cliente.risco = 'A';
    this.cliente.juros = '0';
    this.juros = this.cliente.juros + '%';
        this.getListaJuros();
  }

  getListaJuros() {
    this.habilitarSpinner = true;
    this.habilitarTentarNovamente = false;
    this.habilitarForm = false;
    this.clienteService.getListaJuros().subscribe((res) => {
      this.listaJuros = res;
      this.cliente.risco = this.listaJuros[0].risco;
      this.cliente.juros = this.listaJuros[0].juros;
      this.juros = this.cliente.juros + '%';
      this.habilitarForm = true;
      this.habilitarSpinner = false;
      this.habilitarTentarNovamente = false;
    }, (err) => {
      console.log(err);
      this.habilitarTentarNovamente = true;
      this.habilitarForm = false;
      this.habilitarSpinner = false;
    });
  }

  setValorRisco(riscoSelecionado) {
    this.cliente.risco = riscoSelecionado;
    this.setJuros();
  }

  setJuros() {
    if (this.cliente.risco === this.listaJuros[0].risco) {
      this.cliente.juros = this.listaJuros[0].juros;
      this.juros = this.cliente.juros + '%';
    } else if (this.cliente.risco === this.listaJuros[1].risco) {
      this.cliente.juros = this.listaJuros[1].juros;
      this.juros = this.cliente.juros + '%';
    } else {
      this.cliente.juros = this.listaJuros[2].juros;
      this.juros = this.cliente.juros + '%';
    }
  }

  salvarCliente(formValido) {
    if (formValido === true && this.cliente.risco) {
      this.loading = true;
      this.clienteService.salvarCliente(this.cliente).subscribe((res) => {
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
    this.cliente.limiteCredito = '';
    this.cliente.nome = '';
    this.cliente.risco = this.listaJuros[0].risco;
    this.cliente.juros = this.listaJuros[0].juros;
    this.juros = this.listaJuros[0].juros + '%';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
