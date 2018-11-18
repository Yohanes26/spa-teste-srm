import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaClienteService } from './lista-cliente/lista-cliente.service';
import { MainComponent } from './main.component';
import { ClienteComponent } from './cliente/cliente.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        MainComponent,
        ListaClienteComponent,
        ClienteComponent
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
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatTableModule
    ],
    providers: [ListaClienteService, MainComponent],
    exports: [
        MainComponent,
        ListaClienteComponent,
        ClienteComponent,
        MatSnackBarModule
    ]
})
export class MainModule { }
