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

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { SuperSecretComponent } from './super-secret/super-secret.component';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, SuperSecretComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCkgvnBMaS5-0KfEWF4j_DiDGHgumnkoUI',
      authDomain: 'saas-temp.firebaseapp.com',
      databaseURL: 'https://saas-temp.firebaseio.com',
      projectId: 'saas-temp',
      storageBucket: 'saas-temp.appspot.com',
      messagingSenderId: '357259814826',
      appId: '1:357259814826:web:32716959a03eb1d7e76dd3',
      measurementId: 'G-NTK957WMCD',
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
