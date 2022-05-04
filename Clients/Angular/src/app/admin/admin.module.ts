import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule],
  providers: [AdminService],
})
export class AdminModule {}
