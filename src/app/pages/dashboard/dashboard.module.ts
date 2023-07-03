import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,BrowserModule,CoreModule, RouterModule, AuthModule
  ],
  exports : [
    AnalyticsComponent
  ]
})
export class DashboardModule { }
