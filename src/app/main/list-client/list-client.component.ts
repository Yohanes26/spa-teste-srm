import { Component, OnInit } from '@angular/core';

import { ClientVO } from './../Model/clientVO';

import { ListClientService } from './list-client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  listClient: ClientVO[] = [];
  constructor(private getLista: ListClientService) { }

  ngOnInit() {
    this.popularListaClientes();
  }

  popularListaClientes() {
    this.getLista.getListaClientes().subscribe((res) => {
      console.log(res);
      this.listClient = res;
      console.log(this.listClient);
    }, (err) => {
      console.log(err);
    });
  }

}
