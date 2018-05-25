import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ActivityDetailsPage } from '../pages/activity-details/activity-details';
import { ActivitiesListPage } from '../pages/activities-list/activities-list';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListUserPage } from '../pages/listuser/listuser';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { MenuAppPage } from '../pages/menuApp/menuApp';
import { ListActivityPage } from '../pages/list-activity/list-activity';
import { HelpPage } from '../pages/help/help';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestActivityProvider } from '../providers/rest-activity';

import { HttpClientModule } from '@angular/common/http'
import { RestUserProvider } from '../providers/rest-user';
import { StorageService } from '../providers/storage.service';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ListUserPage,
    ActivitiesListPage,
    ActivityDetailsPage,
    ProfilePage,
    AboutPage,
    SettingsPage,
    ListUserPage,
    TabsPage,
    NewsPage,
    MenuAppPage,
    ListActivityPage,
    HelpPage
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot(),
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ListUserPage,
    ActivitiesListPage,
    ActivityDetailsPage,
    ProfilePage,
    AboutPage,
    SettingsPage,
    ListUserPage,
    TabsPage,
    NewsPage,
    MenuAppPage,
    ListActivityPage,
    HelpPage
  ],

  providers: [
    StatusBar,
    RestActivityProvider,
    SplashScreen,
    RestUserProvider,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})

export class AppModule {}
