import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JobEffects, StatusesEffects } from './store/jobs-table-effects';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jobsReducer } from './store/jobs-table-reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    HttpClientModule,
    StoreModule.forRoot({jobs: jobsReducer}), 
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    EffectsModule.forRoot([JobEffects, StatusesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
