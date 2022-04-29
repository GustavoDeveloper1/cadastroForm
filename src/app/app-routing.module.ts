import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  
  {path:'', component: DashboardComponent},
  {path:'cadastro', component:CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
