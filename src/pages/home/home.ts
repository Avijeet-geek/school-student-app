import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LogicProvider} from '../../providers/logic/logic';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  student_image;
  schl_name;
  student_name;
  class_name;
  gender;
  primary_number;
  std_id;
  constructor(public navCtrl: NavController,private storage: Storage) {
    this.storage.get('student_image').then((student_image) => { 
           
      this.student_image=student_image;
    });
    this.storage.get('student_name').then((student_name) => { 
   
      this.student_name=student_name;
    });
    this.storage.get('school_name').then((school_name) => { 
     
      this.schl_name=school_name; 
    });
    this.storage.get('class_name').then((class_name) => { 
     
      this.class_name=class_name; 
    });
    this.storage.get('gender').then((gender) => { 
     
      this.gender=gender; 
    });
    this.storage.get('primary_number').then((primary_number) => { 
   
      this.primary_number=primary_number; 
    });
      this.storage.get('std_id').then((std_id) => { 
   
      this.std_id=std_id; 
      
    });
  }

     

}
