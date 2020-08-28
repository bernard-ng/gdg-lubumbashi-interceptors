import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeadersInterceptor} from './interceptors/headers.interceptor';
import {LoaderComponent} from './components/loader/loader.component';
import {LoaderService} from './services/loader.service';
import {LoaderInterceptor} from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    [
      {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
    ],
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
