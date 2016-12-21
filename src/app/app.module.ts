import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {routing} from './routes';


import { AppComponent } from './app.component';
import { UserDetailsFormComponent } from './Components/user-details-form/user-details-form.component';
import {TranslateModule} from "ng2-translate";
import {Ng2translateComponent} from "./Components/ng2translate/ng2translate.component";


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsFormComponent,
    Ng2translateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    routing,
    TranslateModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
