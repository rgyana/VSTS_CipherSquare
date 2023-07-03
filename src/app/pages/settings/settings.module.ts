import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThresholdSettingsComponent } from './threshold-settings/threshold-settings.component';
import { CoreModule } from 'src/app/core/core.module';
import { FeaturesModule } from 'src/app/features/features.module';



@NgModule({
  declarations: [
    ThresholdSettingsComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    CoreModule
  ],
  exports: [
    ThresholdSettingsComponent
  ]
})
export class SettingsModule { }
