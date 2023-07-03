import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { CoreModule } from 'src/app/core/core.module';
import { ViewDetailsComponent } from './view-details/view-details.component';

@NgModule({
  declarations: [AdminReportComponent, ViewDetailsComponent],
  imports: [CommonModule, FeaturesModule, CoreModule, RouterModule],
  exports: [AdminReportComponent],
})
export class ReportModule {}
