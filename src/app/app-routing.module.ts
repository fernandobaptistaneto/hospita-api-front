import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { LoginComponent } from './components/template/login/login.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'usuarios',
  component: UsuarioReadComponent
},
{
  path: 'usuarios/create',
  component: UsuarioCreateComponent
},
{
  path: 'login',
  component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
