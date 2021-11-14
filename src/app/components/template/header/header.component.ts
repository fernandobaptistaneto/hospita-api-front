import { UsuarioService } from './../../views/usuario/service/usuario.service';
import {LoginService} from './../../views/usuario/service/login.service';
import {UsuarioCreateComponent} from './../../views/usuario/usuario-create/usuario-create.component';
import {Component, OnInit} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { Usuario } from '../../views/usuario/model/usuario.model';

@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css']})
export class HeaderComponent implements OnInit {

    id : number[] = [0, 1, 2];
    menu : string[] = ['Home', 'Repasse', 'Usuarios'];
    menuLiberado : boolean[] = [
        true, /*Home*/
        true, /*Repasse*/
        true /*Usuarios*/
    ];
    public usuarioLogado: any

    constructor(private loginService : LoginService, private usuarioService: UsuarioService) {}

    ngOnInit(): void {
       this.findByUsername();
    }

    verificaMenu(id : number): boolean {
        if (this.menuLiberado[id]) {
            return true;
        } else {
            return false;
        }

    }

    findByUsername(){
        this.usuarioService.findByUsername(localStorage.getItem('username')).subscribe(resposta => {
          this.usuarioLogado = resposta;
          console.info(this.usuarioLogado)
        });
    }


    logout() {
        this.loginService.logout();
    }
}
