import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, PasswordModule, InputTextModule, ButtonModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
