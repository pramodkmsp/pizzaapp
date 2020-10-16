import {NgModule} from '@angular/core';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatSnackBarModule,
    MatToolbarModule,
  ]
})
export class SharedModule {}
