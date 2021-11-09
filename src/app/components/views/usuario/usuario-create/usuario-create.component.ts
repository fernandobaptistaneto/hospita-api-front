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

  constructor(private service: UsuarioService) {

  }

  ngOnInit(): void {
  }

  create(): void{
    this.usuario.situacao = this.verificaSituacao();
    this.service.create(this.usuario).subscribe((resposta) =>{
      console.log(this.situacaoValor)
      console.log(this.situacaoTexto)
      console.log(this.isChecked)
    });
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

}
