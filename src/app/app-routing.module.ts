import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/autentificacion/sign-in/sign-in.component';
import { GuardGuard } from './components/autentificacion/guard.guard';
import { SignOutComponent } from './components/autentificacion/sign-out/sign-out.component';
import { SignUpComponent } from './components/autentificacion/sign-up/sign-up.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: 'sign-out',
    component: SignOutComponent,
    canActivate: [GuardGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '',
    component: FormularioComponent,
    canActivate: [GuardGuard],
  },

/*   {
    path: '**',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  }, */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
