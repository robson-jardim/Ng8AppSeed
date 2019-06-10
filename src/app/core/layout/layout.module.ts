import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './_header/lay-header.component';
import { SidebarComponent } from './_sidebar/lay-sidebar.component';

// Layouts
import { LayoutSiteAdminComponent } from './layout-site-admin/layout-site-admin.component';
import { LayoutSiteLandingComponent } from './layout-site-lading/layout-site-landing.component';

// Shared modules
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    HeaderComponent, SidebarComponent,
    LayoutSiteLandingComponent, LayoutSiteAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],

  exports: [
    HeaderComponent, SidebarComponent,
    LayoutSiteLandingComponent, LayoutSiteAdminComponent,
  ]
})
export class LayoutModule { }
