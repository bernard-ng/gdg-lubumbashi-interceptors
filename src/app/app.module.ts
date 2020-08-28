import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeadersInterceptor} from './interceptors/headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    [
      {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
