import { AppConstants } from './../../../../app-constants';
import { Usuario } from './../model/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'login'

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Usuario){
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      /*Retorno HTTP*/
      var token = JSON.parse(JSON.stringify(data)).Authorization;
      localStorage.setItem("token", token);
      this.registerSuccessfulLogin(usuario.username);
      this.router.navigate(['']);
    },
      error => {
        console.error("Erro ao fazer login")
      }
    );
  }

  registerSuccessfulLogin(username: any) {
    localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout(): void{
    localStorage.removeItem('token');
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.router.navigate(['/login']);
  }

}
