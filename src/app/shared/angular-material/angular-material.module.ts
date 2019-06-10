import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
         MatIconModule, MatListModule
        } from '@angular/material';

@NgModule({
  imports: [

    // @angular/core
    MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
    MatIconModule, MatListModule,

  ],

  exports: [

    // @angular/core
    MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
    MatIconModule, MatListModule,

  ]
})
export class AngularMaterialModule { }
