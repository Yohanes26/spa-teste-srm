import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './main/cliente/cliente.component';
import { ListaClienteComponent } from './main/lista-cliente/lista-cliente.component';

const routes: Routes = [
  { path: '', component: ClienteComponent },
    { path: 'home', component: MainComponent },
    { path: 'cadastroCliente', component: ClienteComponent },
    { path: 'listaCliente', component: ListaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
