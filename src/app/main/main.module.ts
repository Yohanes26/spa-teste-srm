import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListClientComponent } from './list-client/list-client.component';
import { ListClientService } from './list-client/list-client.service';
import { MainComponent } from './main.component';
import { ClientComponent } from './client/client.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    declarations: [
        MainComponent,
        ListClientComponent,
        ClientComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
    providers: [ListClientService, MainComponent],
    exports: [
        MainComponent,
        ListClientComponent,
        ClientComponent,
        MatSnackBarModule
    ]
})
export class MainModule { }
