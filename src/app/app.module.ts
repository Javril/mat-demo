import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { VirtualScrollerComponent } from './virtual-scroller/virtual-scroller.component';
import { TableVirtualComponent } from './table-virtual/table-virtual.component';
import { LazyloadDirective } from './directives/lazyload.directive';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollerComponent,
    TableVirtualComponent,
    LazyloadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    HttpClientModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
