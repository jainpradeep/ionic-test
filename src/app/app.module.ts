import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { MyApp } from './app.component';
import { AuthSignInPage } from '../pages/auth-sign-in/auth-sign-in';

@NgModule({
  declarations: [
    MyApp,
	AuthSignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	AuthSignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Http,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
