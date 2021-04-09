import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoComponent } from './view/conteudo/conteudo.component'
import { HeaderComponent } from './components/template/header/header.component';
import { ProdutoComponent } from './view/produto/produto.component'

const routes: Routes = [
 
{path:"",component :ConteudoComponent},
{path:"produto",component:ProdutoComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
