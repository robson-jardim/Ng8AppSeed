import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutSiteLandingComponent } from './core/layout/layout-site-lading/layout-site-landing.component';
import { LayoutSiteAdminComponent } from './core/layout/layout-site-admin/layout-site-admin.component';

const routes: Routes = [

  // Public Static routes goes here here - Lazying loading.
  {
    path: '',
    component: LayoutSiteLandingComponent,
    loadChildren: () => import('./core/static/static.module').then(mod => mod.StaticModule)
  },

  // Auth routes goes here - Lazying loading.
  {
    path: '',
    component: LayoutSiteAdminComponent,
    loadChildren: () => import('./core/auth/auth.module').then(mod => mod.AuthModule)
  },

  // no layout routes

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
