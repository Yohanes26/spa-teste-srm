import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './main/client/client.component';
import { ListClientComponent } from './main/list-client/list-client.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'home', component: MainComponent, children: [
      { path: 'client', component: ClientComponent },
      { path: 'listclient', component: ListClientComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
