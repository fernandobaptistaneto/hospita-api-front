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
    //Verifica a situação do toggle, e armazena na variavel para atribuir ao usuário.
    this.verificaDadosSituacao();
    this.usuario.situacao = this.situacaoValor;
    this.service.create(this.usuario).subscribe((resposta) =>{
    this.service.mensagem('Usuário criado com sucesso!');
     this.router.navigate(['/usuarios']);
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message);
      }
    })
  }

  //Verifica situação do toggle para alternar nomes entre ativo e inativo.
  verificaSituacao(){
    if(this.isChecked === true){
      this.situacaoTexto = "Inativo"

    }else{
      this.situacaoTexto = "Ativo"

    }
    console.info(this.isChecked);
  }

  verificaDadosSituacao(){
    if(this.isChecked == false){
      this.situacaoValor = "I";
    }else{
      this.situacaoValor = "A";
    }
  }

  cancel():void {
    this.router.navigate(['usuarios']);
  }

}
