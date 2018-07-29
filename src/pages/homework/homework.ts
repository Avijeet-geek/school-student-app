import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogicProvider} from '../../providers/logic/logic';
/**
 * Generated class for the HomeworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html',
})
export class HomeworkPage {
  datas;
  constructor(public navCtrl: NavController, public navParams: NavParams,public logicProvider:LogicProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworkPage');
    this.homework();
  }
  homework(){  
    this.logicProvider.homework().then(data=>{  
      this.datas=data; 
      console.log(data);   
  })
}

}
