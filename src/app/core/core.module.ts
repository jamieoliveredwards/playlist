import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../shared/angular-material.module';

@NgModule({
  declarations: [
    CoreComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
