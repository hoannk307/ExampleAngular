import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { DsNhanSuComponent } from './components/ds-nhan-su/ds-nhan-su.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FooterComponent,
    UserComponent,
    DsNhanSuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
