import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DropdownModule } from 'primeng/dropdown';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VirtualScrollerModule,
    DropdownModule,
    TableModule
  ],
  exports: [ VirtualScrollerModule, DropdownModule, TableModule ]
})
export class PrimengModule { }
