import { Component, OnInit } from '@angular/core';

import { ClienteVO } from '../Model/clienteVO';

import { ListaClienteService } from './lista-cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {
  listaCliente: ClienteVO[] = [];
  lista: ClienteVO[] = [];
  habilitaTabela = false;
  habilitaSpinner = true;
  habilitaTentarNovamente = false;
  displayedColumns: string[] = ['id', 'nome', 'limiteCredito', 'risco', 'juros'];
  constructor(private getLista: ListaClienteService) { }

  ngOnInit() {
    this.popularListaClientes();
  }

  popularListaClientes() {
    this.habilitaSpinner = true;
    this.habilitaTentarNovamente = false;
    this.habilitaTabela = false;
    this.getLista.getListaClientes().subscribe((res) => {
      this.listaCliente = res;
      this.habilitaSpinner = false;
      this.habilitaTentarNovamente = false;
      this.habilitaTabela = true;
      this.mudaPaginacao(10);
    }, (err) => {
      this.habilitaSpinner = false;
      this.habilitaTentarNovamente = true;
      this.habilitaTabela = false;
    });
  }

  mudaPaginacao(evento: any) {
    this.lista = [];
    for (let i = (evento - 10); i < evento; i++) {
      this.lista.push(this.listaCliente[i]);
    }
  }

}
