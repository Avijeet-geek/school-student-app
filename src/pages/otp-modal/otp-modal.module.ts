import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpModalPage } from './otp-modal';

@NgModule({
  declarations: [
    OtpModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpModalPage),
  ],
})
export class OtpModalPageModule {}
