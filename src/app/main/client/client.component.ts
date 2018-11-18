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

  listaJuros: JurosVO[] = [];
  cliente: ClientVO = new ClientVO;

  riscos: any[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' },
    { value: 'C', viewValue: 'C' }
  ];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getListaJuros();
  }

  getListaJuros() {
    this.clientService.getListaJuros().subscribe((res) => {
      console.log(res);
      this.listaJuros = res;
    }, (err) => {

    });
  }

}
