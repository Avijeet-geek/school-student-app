import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LogicProvider} from '../../providers/logic/logic';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';   
import { NewuserPage } from '../newuser/newuser'; 

/**
 * Generated class for the LoginPage page.
 * 
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
    
@IonicPage()        
@Component({   
  selector: 'page-login',                
  templateUrl: 'login.html',          
})         
export class LoginPage {   
username; 
password;         
token='f5bP6Vi-DG0:APA91bEjYtjF9Jgv5326qBLjre5aC5ywekaZEvlN6fZMTl24OTAKBZXbJ2m_3rz3u4BQEqcdZ31Zvx73nrmFW7SSR5YxZi93MUkhBZoqMES_fFpekkMt6oTtEA0ViV7yCq4bIbOdJPp8';
  constructor(public navCtrl: NavController, public navParams: NavParams,public logicProvider:LogicProvider,private storage: Storage,public toastCtrl: ToastController) {
  }
 
  ionViewDidLoad() { 

    console.log('ionViewDidLoad LoginPage');    
  }    
  log(){     
    let saves={                   
      username: this.username,      
      password:this.password,    
      token:this.token       
    }; 
       
    if(this.username!=''){ 
      this.logicProvider.log(saves).then(data=>{     
        console.log(data); 
        this.storage.set('school_name', data.school_name);      
        this.storage.set('class_name', data.class_name); 
        this.storage.set('color', data.color);   
        this.storage.set('gender', data.gender);      
        this.storage.set('key', data.key);    
        this.storage.set('msg', data.msg);                             
        this.storage.set('school_logo', data.school_logo);     
        this.storage.set('student_image', data.student_image);  
        this.storage.set('student_name', data.student_name);  
        this.storage.set('url', data.url);   
        this.storage.set('primary_number', data.primary_number);   
        this.storage.set('error', data.error);        
        this.storage.get('error').then((value) => {   
          console.log('Your error is', value);         
          if (value == 0) {                        
            this.navCtrl.setRoot(HomePage);                  
          }  
          else{   
          if (value == 0) {                         
            this.navCtrl.setRoot(HomePage);                    
          }  
          else{    

            this.navCtrl.push(LoginPage);    
          }
        }});   
            }) 
    }  
     
  }   
    
  newUser(){ 
    this.navCtrl.setRoot(NewuserPage); 
  }  
  getData(){   
    this.logicProvider.getData().then(data=>{  
 console.log(data);      
 
  //this.err_msg= data.msg;    
  const toast = this.toastCtrl.create({  
    message: 'Success',       
   duration: 5000,  
    position: 'top' 
  });   
  toast.present();   

    })
  }

}

