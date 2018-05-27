import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';

import { RestUserProvider } from '../../providers/rest-user';

@Component({
  selector: 'profile-home',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	user: any;
  image: string;

	constructor(
    private camera: Camera, 
    private domSanitizer: DomSanitizer, 
    public navCtrl: NavController, 
    public params: NavParams, 
    private photoLibrary: PhotoLibrary,
    public RestProvider: RestUserProvider) {
    this.getUser(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  showBirth(data){
    data = data.substr(8,2) + '/' + data.substr(5,2) + '/' + data.substr(0,4);
  
    return data;
  }

  showCpf(data){
    data = (data.substr(0,3) + '.' + data.substr(3,3) + '.' + 
    data.substr(6,3) + '-' + data.substr(9,2));

    return data;
  }

  getUser(id) {
    this.RestProvider.getUser(id)
    .then(data => {
      this.user = [data];
      console.log(this.user);
    });
  }

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
        console.log(err);
      });
  }

  // getGallery(){
  //   this.photoLibrary.requestAuthorization().then(() => {
  //     this.photoLibrary.getLibrary().subscribe({
  //       next: library => {
  //         library.forEach(function(libraryItem) {
  //           console.log(libraryItem.id);          // ID of the photo
  //           console.log(libraryItem.photoURL);    // Cross-platform access to photo
  //           console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
  //           console.log(libraryItem.fileName);
  //           console.log(libraryItem.width);
  //           console.log(libraryItem.height);
  //           console.log(libraryItem.creationDate);
  //           console.log(libraryItem.latitude);
  //           console.log(libraryItem.longitude);
  //           console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
  //         });
  //       },
  //       error: err => { console.log('could not get photos'); },
  //       complete: () => { 
  //         console.log('done getting photos');
  //       }
  //     });
  //   })
  //   .catch(err => console.log('permissions weren\'t granted'));
  // }

  openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.image = file_uri, 
      err => console.log(err));   
  }
}
