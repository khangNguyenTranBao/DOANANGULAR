import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsachhs',
  templateUrl: './danhsachhs.component.html',
  styleUrls: ['./danhsachhs.component.css']
})
export class DANHSACHHSComponent implements OnInit {

  students:any [] = [
    {stt:1,id:112, name: 'Bùi Như Ý',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:2,id:123, name: 'Nguyễn Xuân Như',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều' },
    {stt:3,id:321, name: 'Bùi Xuân Như', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:4,id:153, name: 'Nguyễn Lê Minh',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:5,id:758, name: 'Lương Thiện Minh', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:6,id:983, name: 'Đỗ Nhất Tâm',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều' },
    {stt:7,id:435, name: 'Như Ý', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:8,id:726, name: 'Đoàn Dự',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:9,id:444, name: 'Dương Quá', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:10,id:555, name: 'Vui Thị Tươi',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều' },
    {stt:11,id:666, name: 'Nguyễn Nguyên', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:12,id:113, name: 'Vịnh Xuân Quyền', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:13,id:114, name: 'Nguyễn HAHA', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:14,id:115, name: 'Tân Lập',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều' },
    {stt:15,id:116, name: 'Nguyễn Lê Minh',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:16,id:117, name: 'Huỳnh Thiện Minh', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:17,id:118, name: 'Đỗ Nhất Tâm',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều' },
    {stt:18,id:119, name: 'Như Ý',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:19,id:589, name: 'Đoàn Dự', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:20,id:376, name: 'Dương Quá',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều' },
    {stt:21,id:888, name: 'Vui Thị Tươi', decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
    {stt:22,id:582, name: 'Nguyễn Nguyên',decription: 'none', lop:'Lớp 12' , giaovien: 'Hoàng kiều'},
  ];


  stt: string= '';
  id: string = '';
  name:string= '';
  decription:string = '';
  lop:string = '';
  giaovien:string = '';

  index:number= 0;
  isShowForm:boolean = false;
  isAddstudents = true;
  fliterStatus = "All";

  constructor( ) { }

  ngOnInit(): void {


  }

}
