import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './layouts/welcome/welcome.component';



const routes: Routes = [
  {
    path:"" , component: WelcomeComponent
  },
  // {
  //   path:"login" , component: LoginComponent
  // },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  //  canActivate: [AuthGuard]
},
{ path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }
  // {
  //   path:"dashboard" , component: DashboardComponent
  // },
  // {
  //   path:"reports" , component: ReportsListComponent
  // },
  // {
  //   path:"terrains" , component: TerrainsListeComponent
  // },
  // {
  //   path:"statistique" , component: StatistiqueComponent
  // },
  // {
  //   path:"demandes" , component: DemandesListComponent
  // },
  // {
  //   path:"map" , component: FraudMapComponent
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : []
})
export class AppRoutingModule { }
