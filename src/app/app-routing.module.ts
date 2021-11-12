import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { LoginComponent } from './components/template/login/login.component';
import { AuthGuard } from './components/views/usuario/guard/auth.guard';

const routes: Routes = [
{
  path: '',
  component: HeaderComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'usuarios',component: UsuarioReadComponent },
    { path: 'usuarios/create',component: UsuarioCreateComponent }
  ],
  canActivate: [AuthGuard]
},
{
  path: '',
  component: LoginComponent,
  children: [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'home', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
