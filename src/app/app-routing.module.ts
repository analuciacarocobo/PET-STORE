import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importe el componente creado llamado catalogo
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';

// en el array routes incluir el objeto como esta definido a continuacion
const routes: Routes = [
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
