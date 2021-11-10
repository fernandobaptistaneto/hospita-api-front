import { LoginService } from './../../views/usuario/service/login.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../views/usuario/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario ={
    username: '',
    password: '',
    situacao: ''
  }

  response:any;

  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
 
  }

  public login(){
    this.loginService.login(this.usuario);
  }

  public logout(){
    this.logout();
  }

}
