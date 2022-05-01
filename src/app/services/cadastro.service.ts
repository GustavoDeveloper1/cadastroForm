import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
      },
      estadoCivil: "solteiro",
      diagnosticoClini: "Preguiça",
      diagnosticoFisio: "Sedentário"
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
      },
      estadoCivil: "casado",
      diagnosticoClini: "Preguiça",
      diagnosticoFisio: "Sedentário"
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
      },
      estadoCivil: "casado",
      diagnosticoClini: "Preguiça",
      diagnosticoFisio: "Sedentário"
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
      },
      estadoCivil: "divorciada",
      diagnosticoClini: "Preguiça",
      diagnosticoFisio: "Sedentário"
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
      },
      estadoCivil: "solteiro",
      diagnosticoClini: "Preguiça",
      diagnosticoFisio: "Sedentário"
    },
  ]

  constructor() { }

  getPacientes() {
    return this.pacientes
  }

  adicionaCadastro(novoCadastro: any): Observable<any>{
    return this.pacientes = novoCadastro;
  }
}
