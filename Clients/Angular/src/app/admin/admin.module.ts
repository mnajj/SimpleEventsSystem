import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ButtonModule,
    NgSelectModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [AdminService],
})
export class AdminModule {}
