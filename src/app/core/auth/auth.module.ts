import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswrodComponent } from './components/forgot-passwrod/forgot-passwrod.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { NotifyService } from './services/notify.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswrodComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    ProfileComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule
  ],

  providers: [
    AuthService,
    AuthGuard,
    NotifyService
  ]

})
export class AuthModule { }
