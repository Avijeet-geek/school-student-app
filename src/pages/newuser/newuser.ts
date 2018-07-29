import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,ModalController  } from 'ionic-angular';
import { LogicProvider} from '../../providers/logic/logic';
import { Storage } from '@ionic/storage';
import{OtpModalPage}from '../otp-modal/otp-modal';
/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {
  student_id;
  token='iudabdbfkfduufnlflihudgyhuh78t76t7t348gyu3b4ub3uh87h74h834h8h347h8h48h874h8384h8ugkugvytguybjhbjbut87tt8';
  err_msg;
  constructor(public navCtrl: NavController, public navParams: NavParams,public logicProvider:LogicProvider,public toastCtrl: ToastController,private storage: Storage,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewuserPage');
  }

  check_id(){
    let reg={
      
      student_id:this.student_id,
      token:this.token,
     
    }
    this.storage.set('st_id',this.student_id)
   
    if(this.student_id!='')
    {
      this.logicProvider.check_id(reg).then(data=>{
        console.log(data);
     
        if(data.error==1){//error
            //this.err_msg= data.msg;
            const toast = this.toastCtrl.create({
              message: data.msg,
              duration: 3000,
              position: 'top'
            }); 
            toast.present();
        }else{//success
          const toast = this.toastCtrl.create({
            message: 'success',
            duration: 3000,
            position: 'top'
          }); 
          toast.present();
          this.storage.set('msg', data.msg);
          const modal = this.modalCtrl.create(OtpModalPage);
          modal.present();
        /* this.storage.set('error',"sd"); 
          this.storage.get('error').then((value) => {
            this.er_val= data.error;
          });*/
        }
        
      })
    }
  }

  
  
}
