import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';


import { SquareDirective } from '../../directives/square/square';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  private images: any[] = [];
  galleries :any[]=[{
   
   "images": [{
      "url":"../../assets/imgs/p1.jpg",
      "date":"13-July-2018",
      "loc":""
    },
    {
      "url":"../../assets/imgs/p12.jpg",
      "date":"13-July-2018",
      "loc":""
    },
    {
      "url":"../../assets/imgs/p10.jpg",
      "date":"13-July-2018",
      "loc":""
    },
    {
      "url":"../../assets/imgs/p9.jpg",
      "date":"13-July-2018",
      "loc":""
    },
    {
      "url":"../../assets/imgs/p8.jpg",
      "date":"13-July-2018",
      "loc":""
    },
    {
      "url":"../../assets/imgs/p5.jpg",
      "date":"13-July-2018",
      "loc":""
    }]
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    for (let i = 1; i < 5; i++) {
      this.images.push({
        url: `../../assets/imgs/p${i}.jpg`
      });
    }
    this.images[0].title = 'Build a Chat with Socket.io!';
    this.images[2].title = 'Use Firebase Storage!';
   
  }
  ionViewDidLoad() {
        console.log('ionViewDidLoad GalleryPage');
  }
  

  openModal(image,index,img) {
    console.log(image);
    console.log( index );
    console.log("Image" +img.url );
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: image,
      initialSlide: index,
      closeIcon: 'close'
    });
    console.log("index after loading modal"+index);
    modal.present();
  }
  

}
