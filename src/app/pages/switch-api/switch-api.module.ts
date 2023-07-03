import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchApiComponent } from './switch-api/switch-api.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SwitchApiComponent],
  imports: [CommonModule, BrowserModule, CoreModule, FormsModule],
  exports: [SwitchApiComponent],
})
export class SwitchApiModule {}
