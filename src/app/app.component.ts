import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';


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

import { SquareDirective } from '../directives/square/square';

import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage; 

  pages: Array<{title: string, component: any,icon:string}>;
  student_image;
  school_logo;
  school_name;
  student_name;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',component: HomePage, icon: 'md-home'},
      { title: 'List', component: ListPage, icon: 'md-list' },
      { title: 'Attendance', component: AttendancePage, icon: 'person' },
      { title: 'Sms Reports', component: SmsPage , icon: 'mail'},
      { title: 'Homework', component: HomeworkPage, icon: 'book' },
      { title: 'Exam', component: ExamPage, icon: 'md-clipboard' },
      { title: 'News', component:NewsPage, icon: 'md-paper' },
      { title: 'Routine', component:RoutinePage, icon: 'md-grid' },
      { title: 'Gallery', component: GalleryPage, icon: 'md-images' },
      { title: 'Calendar', component: CalendarPage, icon: 'md-calendar' },
      
      
    ];  
 
    this.storage.get('student_image').then((student_image) => { 
   
      this.student_image=student_image; 
    });
    this.storage.get('school_logo').then((school_logo) => { 
   console.log(school_logo);
      this.school_logo=school_logo; 
    });
    this.storage.get('school_name').then((school_name) => { 
      console.log(school_name);
         this.school_name=school_name; 
       });
       this.storage.get('student_name').then((student_name) => { 
       console.log(student_name);
           this.student_name=student_name; 
         });
 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
