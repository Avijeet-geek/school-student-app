import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogicProvider} from '../../providers/logic/logic';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})

export class NewsPage {

  datas;

  constructor(public navCtrl: NavController, public navParams: NavParams,public logicProvider:LogicProvider,private storage: Storage) {
 
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.news();
    
  }

   news(){  
    this.logicProvider.news().then(data=>{  
      this.datas=data; 
      console.log(data);   
  })
}
  
 

}
