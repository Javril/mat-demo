import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableVirtualComponent } from './table-virtual/table-virtual.component';
import { TableDataResolver } from './resolvers/table-data.resolver';
import { VirtualScrollerComponent } from './virtual-scroller/virtual-scroller.component';

const routes: Routes = [
  {
    path: '',
    component: TableVirtualComponent,
    resolve: { cars: TableDataResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
