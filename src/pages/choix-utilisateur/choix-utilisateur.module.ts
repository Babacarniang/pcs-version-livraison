import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoixUtilisateurPage } from './choix-utilisateur';

@NgModule({
  declarations: [
    ChoixUtilisateurPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoixUtilisateurPage),
  ],
})
export class ChoixUtilisateurPageModule {}
