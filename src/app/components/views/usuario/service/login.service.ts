import { AppConstants } from './../../../../app-constants';
import { Usuario } from './../model/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario){
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      /*Retorno HTTP*/
      var token = JSON.parse(JSON.stringify(data)).Authorization;
      localStorage.setItem("token", token);
      window.sessionStorage.setItem("token", token);
      console.info("TOKEN: ",localStorage.getItem("token"));
      
    },
      error => {
        console.error("Erro ao fazer login")
      }
    );
  }

  logout(): void{
    localStorage.removeItem("token");
    window.sessionStorage.removeItem("token");
  }

}
