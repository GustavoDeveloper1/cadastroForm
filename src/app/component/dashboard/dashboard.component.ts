import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pacientes: any[] = []

  constructor(private pacienteService:CadastroService) { }

  ngOnInit(): void {
  
    this.pacientes = this.pacienteService.getPacientes();
  

  }



}
