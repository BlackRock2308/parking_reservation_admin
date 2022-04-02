import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ReportsListComponent } from './layouts/reports-list/reports-list.component';

// import { FraudMapComponent } from './layouts/fraud-map/fraud-map.component';
 
const routes: Routes = [
  {
    path:"" , component: AdminComponent,
    children: [
      {
        path:"dashboard" , component: DashboardComponent,
        
      },
      {
        path:"reports" , component: ReportsListComponent
      },
     
      // {
      //   path:"map" , component: FraudMapComponent
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
