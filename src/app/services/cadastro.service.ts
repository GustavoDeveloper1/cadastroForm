import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  pacientes = [
    {
      nome: "Jordan",
      data: "03/02/2000 ",
      sexo:"masculino",
      profissao: "Desenvolvedor",
      nacionalidade: "brasileiro",
      telefone: "61999999999",
      address: {
        cidade: "Brasilia",
        bairro :" Guara",
        enderecoResidencial : "Qe 44 conjunto M",
        enderecoComercial: "SIA"
      }
    },
    {
      nome: "Michael",
      data: "03/02/1997 ",
      sexo:"masculino",
      profissao: "Desenvolvedor",
      nacionalidade: "Estadunidense",
      telefone: "55998541200",
      address: {
        cidade: "Brasilia",
        bairro :" Guara",
        enderecoResidencial : "Qe 44 conjunto M",
        enderecoComercial: "SIA"
      }
    },
    {
      nome: "Paulo",
      data: "03/10/1654 ",
      sexo:"masculino",
      profissao: "Desenvolvedor",
      nacionalidade: "brasileiro",
      telefone: "61987541652",
      address: {
        cidade: "Brasilia",
        bairro :" Guara",
        enderecoResidencial : "Qe 44 conjunto M",
        enderecoComercial: "SIA"
      }
    },
    {
      nome: "milene",
      data: "03/02/2010 ",
      sexo:"feminina",
      nacionalidade: "brasileira",
      profissao: "Desenvolvedor",
      telefone: "77987542132",
      address: {
        cidade: "Brasilia",
        bairro :" Guara",
        enderecoResidencial : "Qe 44 conjunto M",
        enderecoComercial: "SIA"
      }
    },
    {
      nome: "Jordan",
      data: "03/02/2000 ",
      sexo:"masculino",
      nacionalidade: "brasileiro",
      profissao: "Desenvolvedor",
      telefone: "61999999999",
      address: {
        cidade: "Brasilia",
        bairro :" Guara",
        enderecoResidencial : "Qe 44 conjunto M",
        enderecoComercial: "SIA"
      }
    },
  ]

  constructor() { }

  getPacientes() {
    return this.pacientes
  }
}
