import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportModule } from './report/report.module';
import { CoreModule } from '../core/core.module';
import { SettingsModule } from './settings/settings.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthService } from '../shared/auth.service';
import { FeaturesModule } from '../features/features.module';
import { UsersModule } from './users/users.module';
import { ReplaceUnderscorePipe } from '../core/pipes/replace-underscore.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardModule,
    ReportModule,
    SettingsModule,
    CoreModule,
    BrowserModule,
    AuthModule,
    SharedModule,
    RouterModule,
    FeaturesModule,
    UsersModule,
  ],
  exports: [PagesRoutingModule],
  providers: [AuthService],
})
export class PagesModule {}
