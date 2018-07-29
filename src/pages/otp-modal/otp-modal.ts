import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LogicProvider} from '../../providers/logic/logic';
import{CreatepasswordPage}from '../../pages/createpassword/createpassword';

/**
 * Generated class for the OtpModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-modal',
  templateUrl: 'otp-modal.html',
})
export class OtpModalPage {
message;
stid;
student_id;
otp;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,public logicProvider:LogicProvider,public toastCtrl: ToastController) {
    this.storage.get('msg').then((msg) => { 
          
      this.message=msg;
    });
    this.storage.get('st_id').then((student_id) => { 
          
      this.stid=student_id;
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpModalPage');
  }

  otp_sbmt(){
    let otp_data={
      student_id:this.stid,
      otp:this.otp

    };
    if(this.otp!=''){
      this.logicProvider.otp_sbmt(otp_data).then(data=>{
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
        this.navCtrl.setRoot(CreatepasswordPage); 
        const toast = this.toastCtrl.create({
          message: data.msg, 
          duration: 3000,
          position: 'top'
          
        }); 
        toast.present();
     
     
      /* this.storage.set('error',"sd"); 
        this.storage.get('error').then((value) => {
          this.er_val= data.error;
        });*/
      }

      })
    }
  }
 
 
}
