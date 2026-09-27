import { Routes } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { ReactiveFormLogin } from './reactive-form-login/reactive-form-login';

export const routes: Routes = [
   {
    path:'',
    component:NavBar,
   },
   {
    path:'reactive-form',
    component:ReactiveFormLogin
   }
];
