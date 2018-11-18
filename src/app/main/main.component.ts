import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {
  habilitarClient: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.verificaBoolean();
  }

  verificaBoolean() {
    if (window.sessionStorage.getItem('habilitarClient') === 'true') {
      this.habilitarClient = true;
    } else {
      this.habilitarClient = false;
    }
    console.log(this.habilitarClient);
  }

}
