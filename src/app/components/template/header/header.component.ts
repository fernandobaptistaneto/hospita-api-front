import { LoginService } from './../../views/usuario/service/login.service';
import { UsuarioCreateComponent } from './../../views/usuario/usuario-create/usuario-create.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
  }

}
