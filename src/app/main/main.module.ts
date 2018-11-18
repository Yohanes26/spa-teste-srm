import { MainComponent } from './main.component';

import { NgModule } from '@angular/core';
import { ListClientComponent } from './list-client/list-client.component';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { ListClientService } from './list-client/list-client.service';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        MainComponent,
        ListClientComponent,
        ClientComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatSelectModule
    ],
    providers: [ListClientService, MainComponent],
    exports: [
        MainComponent,
        ListClientComponent,
        ClientComponent
    ]
})
export class MainModule { }
