import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottleComponent } from './bottle/bottle/bottle.component';
import { MatMenuModule, MatCardModule, MatSnackBarModule, MatSelectModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatTabsModule, MatButtonToggleModule, MatSlideToggleModule, MatExpansionModule, MatProgressSpinnerModule, MatProgressBarModule, MatTableModule, MatBadgeModule, MatDialogModule, MatLabel, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottleComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
