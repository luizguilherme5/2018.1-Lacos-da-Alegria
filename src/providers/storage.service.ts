import { Injectable } from '@angular/core';

@Injectable()

export class StorageService {

    getLocalUserName() {
        let username = localStorage.getItem("username");

        if (username == null) {
            return null;
        } else {
            return JSON.parse(username);
        }
    }

    getLocalAccessToken(){
        let access = localStorage.getItem("access");

        if (access == null) {
            return null;
        } else {
            return JSON.parse(access);
        }
    }

    getLocalRefreshToken(){
        let refresh = localStorage.getItem("refresh");

        if (refresh == null) {
            return null;
        } else {
            return JSON.parse(refresh);
        }
    }

    clearLocalUser(){
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("username");
    }

    setLocalUser(username: string, access: string, refresh: string) {
        localStorage.setItem("username", username);
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
    }

    getLocalPhoto() {
        let photo = localStorage.getItem("photo");

        if (photo == null) {
            return null;
        } else {
            return photo;
        }
    }

    setLocalPhoto(photo: string) {
        localStorage.setItem("photo", photo);
    }

    clearPhoto(){
        localStorage.removeItem("photo");
    }

}
