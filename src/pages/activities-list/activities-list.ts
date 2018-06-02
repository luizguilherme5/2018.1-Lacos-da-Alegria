import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { RoleService } from '../../providers/role.service';
import { RestActivityProvider } from '../../providers/rest-activity';

import { ActivityDetailsPage } from '../activity-details/activity-details';

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html'
})

export class ActivitiesListPage {
  activities: any;
  indexes: any;
  role: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public RestProvider: RestActivityProvider, public roleService: RoleService) {
    this.getActivitiesList();
    this.role = roleService.getLocalRole();
  }

  openModal(index) {
      let modal = this.modalCtrl.create(ActivityDetailsPage, index);
      modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getActivitiesList(){
    return this.RestProvider.getActivitiesList()
    .then(data => {
      this.activities = data;
      console.log(this.activities);
    });
  }
}
