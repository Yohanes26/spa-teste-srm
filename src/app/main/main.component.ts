import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  habilitarClient: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
