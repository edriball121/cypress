import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar modulos componente tarjeta
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
//importar modulo de tarjetas
import { ListPlaceholdersComponent } from './components/place-holder/list-placeholders/list-placeholders.component'
//importar landing page
import { LandingpageComponent } from './components/landingpage/landingpage.component';

export const routes: Routes = [
  {path: '', component:LandingpageComponent},
  {path: 'cards', component:TarjetaCreditoComponent},
  {path: 'placeholdersList', component:ListPlaceholdersComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
