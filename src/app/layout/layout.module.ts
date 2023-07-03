import { PagesModule } from './../pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ComponentsModule } from './components/components.module';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CommonModule,
    ComponentsModule,
    PagesModule,
    RouterModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class LayoutModule { }
