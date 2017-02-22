import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertPage } from '../pages/alert/alert';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  pages: Array<{title: string, component: any}> = [];

  constructor(platform: Platform, public menuCtrl: MenuController) {

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Action Scheets', component: ActionSheetsPage},
      {title: 'Alert', component: AlertPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: {title: string, component: any}): void {
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}
