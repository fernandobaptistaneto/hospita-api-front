import { Usuario } from './../../../usuario.model';
import { UsuarioReadComponent } from './../../usuario-read.component';
import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-read-dialog',
  templateUrl: './usuario-read-dialog.component.html',
  styleUrls: ['./usuario-read-dialog.component.css']
})
export class UsuarioReadDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsuarioReadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario) { 

    }

  ngOnInit(): void {
  }

}
