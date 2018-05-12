import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

import { ActivitiesListPage } from '../activities-list/activities-list';

@Component({
  selector: 'page-activity-details',
  templateUrl: 'activity-details.html'
})
export class ActivityDetailsPage {
  activity: any;

  constructor(public navCtrl: NavController, public params: NavParams, public restProvider: RestApiProvider) {
    let id = this.params.get('id');
    this.getActivity(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getActivity(id) {
    this.restProvider.getActivity(id)
    .then(data => {
      this.activity = [data];
      console.log(this.activity);
    });
  }

  BtnBackToList(){
    this.navCtrl.push(ActivitiesListPage);
  }
}