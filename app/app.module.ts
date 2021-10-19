import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DANHSACHHSComponent } from './code_CN/danhsachhs/danhsachhs.component';
import { ListchucnangComponent } from './code_CN/listchucnang/listchucnang.component';
import { HeaderComponent } from './code_CN/header/header.component';
import { CarouselComponent } from './code_CN/carousel/carousel.component';
import { TrangthaiComponent } from './code_CN/trangthai/trangthai.component';
import { DslophocComponent } from './code_CN/dslophoc/dslophoc.component';
import { DsmonhocComponent } from './code_CN/dsmonhoc/dsmonhoc.component';
import { DsdiemhocsinhComponent } from './code_CN/dsdiemhocsinh/dsdiemhocsinh.component';
import { NavigationModule } from './navigation/navigation.module';
@NgModule({
  declarations: [
    AppComponent,
    DANHSACHHSComponent,
    ListchucnangComponent,
    HeaderComponent,
    CarouselComponent,
    TrangthaiComponent,
    DslophocComponent,
    DsmonhocComponent,
    DsdiemhocsinhComponent,

  ],
  imports: [
    BrowserModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
