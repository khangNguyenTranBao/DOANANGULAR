import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { DslophocComponent } from '../code_CN/dslophoc/dslophoc.component';
import { DANHSACHHSComponent } from '../code_CN/danhsachhs/danhsachhs.component';
import { DsmonhocComponent } from '../code_CN/dsmonhoc/dsmonhoc.component';
import { DsdiemhocsinhComponent } from '../code_CN/dsdiemhocsinh/dsdiemhocsinh.component';

const routes : Routes = [
  {path: '',pathMatch:'full' , redirectTo:'trangchu'},

  {path: 'dslophoc' , component: DslophocComponent},
  {path: 'dshocsinh' , component: DANHSACHHSComponent},
  {path: 'dsmonhoc' , component: DsmonhocComponent},
  {path: 'dsdiemhocsinh' , component: DsdiemhocsinhComponent},


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class NavigationModule { }
