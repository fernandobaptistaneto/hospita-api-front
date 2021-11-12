import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';
import { UsuarioReadDialogComponent } from './usuario-read-dialog/usuario-read-dialog/usuario-read-dialog.component';
import {  MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[] = []
  displayedColumns: string[] = ['id', 'username', 'situacao', 'perfil', 'acoes'];
  clickedRows = new Set<Usuario>();
  public usuarioClick!: Usuario;

  constructor(private service: UsuarioService, private router: Router, public dialog: MatDialog, private loginService:LoginService) { }

  ngOnInit(): void {
    this.findAll();
  }
  

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.usuarios = resposta;
    });
  }

  navegarParaUsuarioCreate(){
    this.router.navigate(["usuarios/create"]);
  }

  editarUsuario(usuario:Usuario): void{
    console.log(usuario.nome);
  }

  
  openDialog(usuario:Usuario): void {
    console.log(usuario);
    const dialogRef = this.dialog.open(UsuarioReadDialogComponent, {
      height: '400px',
      width: '400px',
      data: usuario
    });
  }
}
