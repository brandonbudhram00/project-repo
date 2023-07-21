import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { InfoComponent } from './info/info.component';
import { NameComponent } from './name/name.component';
import { AddressComponent } from './address/address.component';
import { EmailComponent } from './email/email.component';
import { ProgramsComponent } from './programs/programs.component'; 

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NameComponent,
    AddressComponent,
    EmailComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
