import { MainComponent } from './main.component';

import { NgModule } from '@angular/core';
import { ListClientComponent } from './list-client/list-client.component';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        MainComponent,
        ListClientComponent,
        ClientComponent
    ],
    imports: [
        RouterModule
    ],
    providers: [],
    exports: [
        MainComponent,
        ListClientComponent,
        ClientComponent
    ]
})
export class MainModule { }
