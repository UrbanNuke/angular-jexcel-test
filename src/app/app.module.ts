import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JexcelTableComponent } from './jexcel-table/jexcel-table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, JexcelTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
