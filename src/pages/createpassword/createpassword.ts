import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogicProvider} from '../../providers/logic/logic';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';   
/**
 * Generated class for the CreatepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createpassword',
  templateUrl: 'createpassword.html',
})
export class CreatepasswordPage {
  password;
  confirm_password;
  stid;
  token='iudabdbfkfduufnlflihudgyhuh78t76t7t348gyu3b4ub3uh87h74h834h8h347h8h48h874h8384h8ugkugvytguybjhbjbut87tt8';
  constructor(public navCtrl: NavController, public navParams: NavParams,public logicProvider:LogicProvider,private storage: Storage) {
 
    this.storage.get('st_id').then((student_id) => { 
          
      this.stid=student_id;
      console.log(this.stid);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatepasswordPage');
  }
  NewPassword(){
    let saves={                   
          
      password:this.password,    
      confirm_password:this.confirm_password, 
      token:this.token,
      std_id:this.stid      
    }; 
    
    if(this.password!=''){  
      this.logicProvider.NewPassword(saves).then(data=>{        
        console.log(JSON.stringify(data));  
            }) 
    }



}
}
