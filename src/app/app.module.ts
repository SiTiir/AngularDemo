import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgForExamplePageComponent } from './components/ng-for-example-page/ng-for-example-page.component';
import { NgIfExamplePageComponent } from './components/ng-if-example-page/ng-if-example-page.component';
import { BmiCalculatorComponent } from './components/app/bmi-calculator/bmi-calculator.component';
import { SimplePageApplicationComponent } from './components/simple-page-application/simple-page-application.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BmiComponent } from './components/bmi/bmi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NgForExamplePageComponent,
    NgIfExamplePageComponent,
    BmiCalculatorComponent,
    SimplePageApplicationComponent,
    BmiComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'simplepage', component: SimplePageApplicationComponent},
      { path: 'ifexample', component: NgIfExamplePageComponent},
      { path: 'forexample', component: NgForExamplePageComponent},
      { path: 'bmiexample', component: BmiComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
