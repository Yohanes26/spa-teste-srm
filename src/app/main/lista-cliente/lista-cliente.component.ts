import { Component, OnInit } from '@angular/core';

import { ClienteVO } from '../Model/clienteVO';

import { ListaClienteService } from './lista-cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {
  listClient: ClienteVO[] = [];
  habilitaTabela = false;
  habilitaSpinner = true;
  habilitaTentarNovamente = false;
  constructor(private getLista: ListaClienteService) { }

  ngOnInit() {
    this.popularListaClientes();
  }

  popularListaClientes() {
    this.habilitaSpinner = true;
    this.habilitaTentarNovamente = false;
    this.habilitaTabela = false;
    this.getLista.getListaClientes().subscribe((res) => {
      console.log(res);
      this.listClient = res;
      this.habilitaSpinner = false;
      this.habilitaTentarNovamente = false;
      this.habilitaTabela = true;
      console.log(this.listClient);
    }, (err) => {
      console.log(err);
      this.habilitaSpinner = false;
      this.habilitaTentarNovamente = true;
      this.habilitaTabela = false;
    });
  }

}
