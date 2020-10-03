import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const angularMaterialModules: any[] = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [angularMaterialModules],
  exports: [angularMaterialModules]
})
export class AngularMaterialModule { }
