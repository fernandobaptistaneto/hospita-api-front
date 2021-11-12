import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }
  

  findAll():Observable<Usuario[]>{
    const url = `${this.baseUrl}/usuarios/listarTodosUsuarios`
    return this.http.get<Usuario[]>(url)
  }

  findByUsername(login: any):Observable<Usuario[]>{
    const url = `${this.baseUrl}/usuarios/?username=${login}`
    return this.http.get<Usuario[]>(url)
  }

  create(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/usuarios/createUsuario`
    return this.http.post<Usuario>(url, usuario);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 2000
    });
  }

}
