import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ClassComponent } from './components/class/class.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TmtcComponent } from './components/tmtc/tmtc.component';
import { MainComponent } from './pages/main/main.component';
import { Button2Component } from './components/button2/button2.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { TrainComponent } from './components/train/train.component';

@NgModule({
  declarations: [
    AppComponent,
    TmtcComponent,
    ButtonComponent,
    routingComponent,
    AppBarComponent,
    ClassComponent,
    LandingPageComponent,
    MainComponent,
    Button2Component,
    TextboxComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
