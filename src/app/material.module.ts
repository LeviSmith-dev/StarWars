import {NgModule} from '@angular/core';

import { MatButtonModule , MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule} from '@angular/material';

@NgModule({
  imports:[
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ]
})

export class MaterialModule{};
