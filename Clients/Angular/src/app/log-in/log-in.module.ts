import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { LogInComponent } from './log-in.component';
import { RouterModule } from '@angular/router';
import { LogInService } from './log-in.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogInComponent],
  providers: [LogInService],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LogInComponent],
})
export class LogInModule {}
