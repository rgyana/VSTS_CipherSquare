import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeilPipe } from './pipes/ceil.pipe';
import { ReplaceUnderscorePipe } from './pipes/replace-underscore.pipe';

@NgModule({
  declarations: [CeilPipe, ReplaceUnderscorePipe],
  imports: [CommonModule],
  exports: [CeilPipe, ReplaceUnderscorePipe],
})
export class CoreModule {}
