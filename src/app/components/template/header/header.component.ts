import {LoginService} from './../../views/usuario/service/login.service';
import {UsuarioCreateComponent} from './../../views/usuario/usuario-create/usuario-create.component';
import {Component, OnInit} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css']})
export class HeaderComponent implements OnInit {

    id : number[] = [0, 1, 2];
    menu : string[] = ['Home', 'Repasse', 'Usuarios'];
    menuLiberado : boolean[] = [
        true, /*Home*/
        true, /*Repasse*/
        true /*Usuarios*/
    ];

    constructor(private loginService : LoginService) {}

    ngOnInit(): void {}

    usuarioLogado(): any{
        var login;
        return  login = window.localStorage.getItem('nome');
    }

    verificaMenu(id : number): boolean {
        if (this.menuLiberado[id]) {
            return true;
        } else {
            return false;
        }

    }

    logout() {
        this.loginService.logout();
    }
}
