import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';


@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  isChecked = true;
  situacaoValor: string = 'A';
  situacaoTexto: string = "Ativo";
  usuario: Usuario ={
    username:'',
    password: '',
    situacao: ''
  }

  constructor(private service: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
  }

  create(): void{
    this.usuario.situacao = this.verificaSituacao();
    this.service.create(this.usuario).subscribe((resposta) =>{
      this.service.mensagem('Usuário criado com sucesso!');
      this.router.navigate(['/usuarios']);
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message);
      }
    })
  }

  verificaSituacao() : string{
    if(this.isChecked == true){
      this.situacaoValor = 'A'
      this.situacaoTexto = "Ativo"
    }else{
      this.situacaoValor = 'I'
      this.situacaoTexto = "Inativo"
    }
    console.log(this.isChecked);
    return this.situacaoValor
  }

  cancel():void {
    this.router.navigate(['usuarios']);
  }

}
