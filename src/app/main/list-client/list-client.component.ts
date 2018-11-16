import { ClientVO } from './../Model/clientVO';
import { Component, OnInit } from '@angular/core';
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
      /* for (const track of this.tracks) {
        track.artistName = '';
        for (const artist of track['artists']) {
          track.artistName += artist.name + ', ';
        }
        track.artistName.slice((track.artistName.length - 2), track.artistName.length);
      }
      this.popularTable(); */
    }, (err) => {
      console.log(err);
    });
  }

}
