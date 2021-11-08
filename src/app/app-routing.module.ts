import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
