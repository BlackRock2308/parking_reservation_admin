import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DashCardsComponent } from './layouts/dash-cards/dash-cards.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ReportDetailsComponent } from './layouts/report-details/report-details.component';
import { ReportsListComponent } from './layouts/reports-list/reports-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { ReportService } from './_services/report.service';


import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    DashCardsComponent,
    ReportsListComponent,
    ReportDetailsComponent,
    FilterPipe,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

  ],

  providers : [
    ReportService
  ],
  exports: [
   
  ]
})
export class AdminModule { }
