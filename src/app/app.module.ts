import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {routes} from './approute';

import {Location} from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

 
////import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent }         from './app.component';
import {BlogService} from './BlogService';
import {RegistrationComponent} from './RegistrationComponent';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TestComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
