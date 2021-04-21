import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateModule} from './template/template.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(lazyModule => lazyModule.AuthModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then(lazyModule => lazyModule.TemplateModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(lazyModule => lazyModule.ReactiveModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
