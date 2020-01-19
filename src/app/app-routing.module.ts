import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    loadChildren: () => import(`./modules/dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path: 'main2',
    loadChildren: () => import(`./modules/dashboard2/dashboard2.module`).then(m => m.Dashboard2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
