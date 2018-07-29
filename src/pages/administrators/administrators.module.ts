import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministratorsPage } from './administrators';

@NgModule({
  declarations: [
    AdministratorsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdministratorsPage),
  ],
})
export class AdministratorsPageModule {}
