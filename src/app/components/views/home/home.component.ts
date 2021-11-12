import { UsuarioService } from './../usuario/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/model/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = []

  usuario: Usuario ={
    id:'',
    nome:'',
    username:'',
    password:'',
    situacao:''
  }

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.findByUsername(localStorage.getItem('username'));
    
    let keys = Object.keys(this.findByUsername(localStorage.getItem('username')));

  }

  findByUsername(username:any){
    this.service.findByUsername(username).subscribe(resposta => {
      this.usuarios = resposta;
    });
    return this.usuarios;
  }

}
