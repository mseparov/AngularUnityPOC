import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnityComponent } from './Components/unity/unity.component';
import { HomeComponent } from './Components/home/home.component';
import { SecondPageComponent } from './Components/second-page/second-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NodeConfigSidebarComponent } from './Components/node-config-sidebar/node-config-sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    UnityComponent,
    HomeComponent,
    SecondPageComponent,
    NavBarComponent,
    NodeConfigSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'second-page', component: SecondPageComponent },
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
