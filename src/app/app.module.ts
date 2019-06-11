import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpace } from './item.pipe';
import { CheckItemComponent } from './checkitem.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ConvertToSpace,
    CheckItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
