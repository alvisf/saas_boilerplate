import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { SuperSecretComponent } from './super-secret/super-secret.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, SuperSecretComponent, LandingPageComponent, AuthPageComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCIIOlyIKQmcq2sjbgtXpFbFgMaWEu3mtg',
      authDomain: 'saas-boilerplate-7741b.firebaseapp.com',
      databaseURL: 'https://saas-boilerplate-7741b.firebaseio.com',
      projectId: 'saas-boilerplate-7741b',
      storageBucket: 'saas-boilerplate-7741b.appspot.com',
      messagingSenderId: '853639551537',
      appId: '1:853639551537:web:a48b4024d29d4ac4e75310',
      measurementId: 'G-4QYR9W6K3S',
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
