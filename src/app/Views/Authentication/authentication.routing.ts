import { Routes } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AuthenticationRoutes: Routes = [
    {
      path: 'auth',
      children: [
        {
          path: '404',
          component: ErrorComponent
        },
        {
          path: 'forgot',
          component: ForgotPasswordComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        }
      ]
    }
  ];