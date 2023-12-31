import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FeaturesModule } from 'src/app/features/features.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, FeaturesModule],
  exports: [UserListComponent],
})
export class UsersModule {}
