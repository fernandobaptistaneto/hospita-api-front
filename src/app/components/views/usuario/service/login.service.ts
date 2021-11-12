import { UsuarioService } from './usuario.service';
import { LoginAlertErrorComponent } from './../../../template/login/Alertas/login-alert-error/login-alert-error/login-alert-error.component';
import { AppConstants } from './../../../../app-constants';
import { Usuario } from './../model/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginAlertComponent } from 'src/app/components/template/login/Alertas/login-alert/login-alert.component';
import { UsuarioReadComponent } from '../usuario-read/usuario-read.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  durationInSeconds = 2;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'username'
  usuarioLogado: Usuario[] = []
  usuarioTeste: any;
  

  constructor(private http: HttpClient, private router: Router, private _snackBar : MatSnackBar, private service: UsuarioService) { }

  login(usuario: Usuario){
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      /*Retorno HTTP*/
      var token = JSON.parse(JSON.stringify(data)).Authorization;
      localStorage.setItem("token", token);
      this.registerSuccessfulLogin(usuario.username);
      this.router.navigate(['']);
      
      //Recebe os dados do usuário logado
      this.findByUsername(localStorage.getItem('username'));

      //Alerta login efetuado com sucesso
      this.alerta(LoginAlertComponent, 2);
    },
      error => {
        console.error("Erro ao fazer login")
        this.alerta(LoginAlertErrorComponent, 2);
      }
    );
  }

  registerSuccessfulLogin(username: any) {
    localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.router.navigate(['/login']);
  }

  alerta(component: any, durationInSeconds: number){
    this._snackBar.openFromComponent(component, {
      duration: durationInSeconds * 1000
  });
  }

  findByUsername(username:any){
    this.service.findByUsername(username).subscribe(resposta => {
      this.usuarioTeste = resposta;
    });
  }

}
