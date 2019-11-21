import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { CounterComponent } from './counter/counter.component';
import { IconsComponent } from './icons/icons.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
   {path: '', component: LandingPageComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      FormComponent,
      CounterComponent,
      IconsComponent,
      LandingPageComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(
         appRoutes, {enableTracing:true}
      )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
