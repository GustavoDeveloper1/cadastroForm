import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  paciente: any = [
    {
      nome: null,
      data: null,
      sexo: null,
      profissao: null,
      nacionalidade: null,
      telefone: null,
      address: {
        cidade: null,
        bairro: null,
        enderecoResidencial: null,
        enderecoComercial: null
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  
  }

  
  onSubmit(form: any) {
    console.log(form)
  }

}
