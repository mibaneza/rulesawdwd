import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableRuleslyComponent } from './table-rulesly/table-rulesly.component';
import { UserpunishService } from './service/userpunish.service';
import { RolplayComponent } from './rolplay/rolplay.component';
import { MaterialModule } from './material-module';

const dbConfig: DBConfig  = {
  name: 'ruleslyDB',
  version: 1,
  objectStoresMeta: [{
    store: 'rolplay-ban',
    storeConfig: { keyPath: 'id', autoIncrement: true },
       storeSchema: [
      { name: 'added', keypath: 'added', options: { unique: false } },
      { name: 'type', keypath: 'type', options: { unique: false } },
      { name: 'reason', keypath: 'reason', options: { unique: false } }
    ]
  }]
};

@NgModule({
    declarations: [ 
    AppComponent,
    HelloComponent,
    TableRuleslyComponent,
    RolplayComponent,

   ],
  imports: [
  BrowserModule, 
  MaterialModule,
  HttpClientModule,
  FormsModule,
   NgxIndexedDBModule.forRoot(dbConfig)  ],

  bootstrap:    [ AppComponent ],
  providers: [UserpunishService]
})
export class AppModule { }
