import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,
              private main: MainComponent) { }

  ngOnInit() {
  }

  habilitarCadastroClientes() {
    window.sessionStorage.setItem('habilitarClient', 'true');
    this.router.navigate(['/cadastroCliente']);
  }

  habilitarListaClientes() {
    window.sessionStorage.setItem('habilitarClient', 'false');
    this.router.navigate(['/listaCliente']);
  }

}
