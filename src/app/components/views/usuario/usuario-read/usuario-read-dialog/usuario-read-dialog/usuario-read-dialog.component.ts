
import { UsuarioReadComponent } from './../../usuario-read.component';
import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../../model/usuario.model';

@Component({
  selector: 'app-usuario-read-dialog',
  templateUrl: './usuario-read-dialog.component.html',
  styleUrls: ['./usuario-read-dialog.component.css']
})
export class UsuarioReadDialogComponent implements OnInit {

  situacaoUsuario: boolean = false;
  dialogoSituacao: any;

  constructor(public dialogRef: MatDialogRef<UsuarioReadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario) { 
      this.verificaSituacao();
      console.log(this.situacaoUsuario);
    }

    verificaSituacao(){
      if(this.data.situacao === 'A'){
        this.situacaoUsuario = true;
        this.dialogoSituacao = "Ativo";
      }else{
        this.situacaoUsuario = false;
        this.dialogoSituacao = "Inativo";
      }
    }

  ngOnInit(): void {
    
  }

}
