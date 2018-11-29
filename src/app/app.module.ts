import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularCdkModule } from './material/angular-cdk/angular-cdk.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { CreateTreeComponent } from './create-tree/create-tree.component';
import { MaterialTreeComponent } from './material-tree/material-tree.component';
import { CdkTreeComponent } from './cdk-tree/cdk-tree.component';
import { MainDashComponent } from './main-dash/main-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    CreateTreeComponent,
    MaterialTreeComponent,
    CdkTreeComponent,
    MainDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCdkModule // ALWAYS INCLUDE THIS AFTER "BrowserModule"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
