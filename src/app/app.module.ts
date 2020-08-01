import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableRuleslyComponent } from './table-rulesly/table-rulesly.component';
import { UserpunishService } from './service/userpunish.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TableRuleslyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserpunishService]
})
export class AppModule { }
