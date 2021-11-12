import {LoginService} from './../../views/usuario/service/login.service';
import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../views/usuario/model/usuario.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginAlertComponent} from './Alertas/login-alert/login-alert.component';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
    usuario : Usuario = {
        username: '',
        password: '',
        situacao: ''
    }

    constructor(private loginService : LoginService, private _snackBar : MatSnackBar) {}


    ngOnInit(): void {}

    public login() {

        this.loginService.login(this.usuario);

    }

    public logout(): void {
        this.loginService.logout();
    }

}
