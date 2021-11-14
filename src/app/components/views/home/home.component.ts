import { HeaderComponent } from './../../template/header/header.component';
import { UsuarioService } from './../usuario/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/model/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UsuarioService, public usuario: HeaderComponent) { }

  ngOnInit(): void {

  }

}
