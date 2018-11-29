import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeComponent } from './tree/tree.component';
import { MaterialTreeComponent } from './material-tree/material-tree.component';
import { CdkTreeComponent } from './cdk-tree/cdk-tree.component';

const routes: Routes = [
  { path: 'tree', component: TreeComponent },
  { path: 'material-tree', component: MaterialTreeComponent },
  { path: 'cdk-tree', component: CdkTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
