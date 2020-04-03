import { NZ_I18N, NgZorroAntdModule, en_US } from "ng-zorro-antd";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import en from "@angular/common/locales/en";
import { registerLocaleData } from "@angular/common";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    SlimLoadingBarModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
