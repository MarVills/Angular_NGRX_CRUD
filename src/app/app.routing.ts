import { Routes } from "@angular/router";
import { LoginComponent } from "./Views/Authentication/login/login.component";
import { DashboardComponent } from "./Views/dashboard/dashboard.component";

export const AppRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '/auth',
                loadChildren: () => import('./Views/Authentication/authentication.module').then(m=>m.AuthenticationModule),
            },
            {
                path: '**',
                redirectTo: 'auth/404'
            }
        ]
    }
];