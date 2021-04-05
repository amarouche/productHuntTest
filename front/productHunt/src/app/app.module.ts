import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PostScreenComponent } from './post-screen/post-screen.component';
import { MatSelectModule } from "@angular/material/select";
import {MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ChartsModule } from 'ng2-charts';
import { MY_DATE_FORMATS } from './models/date-forma.model';
import { HttpClientModule } from '@angular/common/http';
import { StatisticComponent } from './statistic/statistic.component';
// export const MY_DATE_FORMATS = {
  
// };
const appRoutes: Routes = [
  { path: '', component: PostScreenComponent },
  { path: 'statistic', component: StatisticComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    PostScreenComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes),
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    ChartsModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
