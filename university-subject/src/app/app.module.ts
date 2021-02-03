import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { SubjectComponent } from './components/subject/subject.component';

import { SubjectService } from './services/subject.service';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
