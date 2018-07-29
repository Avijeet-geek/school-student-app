import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SmsPage } from '../pages/sms/sms';
import { AttendancePage } from '../pages/attendance/attendance';
import { HomeworkPage } from '../pages/homework/homework';
import { ExamPage } from '../pages/exam/exam';
import { NewsPage } from '../pages/news/news'; 
import { RoutinePage } from '../pages/routine/routine';
import { GalleryPage } from '../pages/gallery/gallery';
import { CalendarPage } from '../pages/calendar/calendar';
import { LoginPage } from '../pages/login/login';
import{NewuserPage} from '../pages/newuser/newuser';
import{OtpModalPage}from '../pages/otp-modal/otp-modal';
import{CreatepasswordPage}from '../pages/createpassword/createpassword';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { SquareDirective } from '../directives/square/square';

import { LogicProvider } from '../providers/logic/logic';
// import { Calendar } from '@ionic-native/calendar';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AttendancePage,
    SmsPage,
    HomeworkPage,
    ExamPage,
    NewsPage,
    RoutinePage,
    GalleryPage,
   CalendarPage,
   LoginPage,
   NewuserPage,
   OtpModalPage,
   CreatepasswordPage
   

 

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
   


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AttendancePage,
    SmsPage,
    HomeworkPage,
    ExamPage,
    NewsPage,
    RoutinePage,
    GalleryPage,
    CalendarPage,
    LoginPage,
    NewuserPage, 
    OtpModalPage,
    CreatepasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogicProvider,
    HttpClientModule  
  ]
})
export class AppModule {}
