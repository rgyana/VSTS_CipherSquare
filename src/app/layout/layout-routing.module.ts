import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from '../pages/dashboard/analytics/analytics.component';
import { AdminReportComponent } from '../pages/report/admin-report/admin-report.component';
import { ThresholdSettingsComponent } from '../pages/settings/threshold-settings/threshold-settings.component';
import { ViewDetailsComponent } from '../pages/report/view-details/view-details.component';
import { ReportService } from '../shared/report.service';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { UserListComponent } from '../pages/users/user-list/user-list.component';
import { SwitchApiComponent } from '../pages/switch-api/switch-api/switch-api.component';

const routes: Routes = [
  //dashboard module
  {
    path: 'dashboard',
    component: TemplateComponent,
    children: [
      {
        path: 'analytics',
        component: AnalyticsComponent,
      },
    ],
  },

  //report module
  {
    path: 'reports',
    component: TemplateComponent,
    children: [
      {
        path: 'admin',
        component: AdminReportComponent,
      },
      {
        path: 'view-details',
        component: ViewDetailsComponent,
        resolve: {
          data: () => inject(ReportService).specificRecordData$,
        },
      },
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
      },
    ],
  },

  //users module
  {
    path: 'users',
    component: TemplateComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
      },
    ],
  },

  //settings module
  {
    path: 'settings',
    component: TemplateComponent,
    children: [
      {
        path: 'threshold',
        component: ThresholdSettingsComponent,
      },
    ],
  },

  // switch api module
  {
    path: 'switch-api',
    component: TemplateComponent,
    children: [
      {
        path: 'switch-api',
        component: SwitchApiComponent,
      },
    ],
  },

  // authentication
  { path: 'login', component: LoginComponent },

  { path: '', pathMatch: 'full', redirectTo: 'dashboard/analytics' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
