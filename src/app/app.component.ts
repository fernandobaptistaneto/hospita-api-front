import { Usuario } from './components/views/usuario/model/usuario.model';
import { LoginService } from './components/views/usuario/service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  title = 'hospital-front';

  usuario: Usuario ={
    username:'',
    password: '',
    situacao: ''
  }

  constructor(private loginService: LoginService){}

  public login(){
    this.loginService.login(this.usuario);
  }

}
