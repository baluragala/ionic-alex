import { BooksPage } from './../books/books';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToAbout(){
    this.navCtrl.push(AboutPage);
  }

  navigateToBooks(){
    this.navCtrl.push(BooksPage);
  }

}
