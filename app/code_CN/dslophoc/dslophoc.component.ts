import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dslophoc',
  templateUrl: './dslophoc.component.html',
  styleUrls: ['./dslophoc.component.css']
})
export class DslophocComponent implements OnInit {
  students:any [] = [
    {stt:1,id:321, name: 'Lớp 12A1' , giaovien: 'Hoàng Kiều' , description: 'Đang hoạt động'},
    {stt:2,id:333, name: 'Lớp 12A2' , giaovien: 'Bằng Kiều' , description: 'Không hoạt động'},
    {stt:3,id:345, name: 'Lớp 12A3' , giaovien: 'Hoàng Tôn' , description: 'Đang lên kế hoạch'},
    {stt:4,id:346, name: 'Lớp 12A4' , giaovien: 'Nguyễn Đình Vũ' , description: 'Dự kiến mở'},
    {stt:5,id:875, name: 'Lớp 12A5' , giaovien: 'Xuân Trường ', description: 'Đang lên kế hoạch'},
    {stt:6,id:554, name: 'Lớp 12A6' , giaovien: 'Hoàng Thanh Trương' , description: 'Dự kiến mở'},
    {stt:7,id:652, name: 'Lớp 12A7' , giaovien: 'Trọng Thanh' , description: 'Dự kiến mở'},
    {stt:8,id:452, name: 'Lớp 12A8' , giaovien: 'Trọng Nguyễn' , description: 'Dự kiến mở'},
    {stt:9,id:474, name: 'Lớp 12A9' , giaovien: 'Tấn Trường' , description: 'Dự kiến mở'},
    {stt:10,id:124, name: 'Lớp 12A10' , giaovien: 'Văn Thanh' , description: 'Dự kiến mở'},
    {stt:11,id:389, name: 'Lớp 12A11' , giaovien: 'Trọng Thanh' , description: 'Dự kiến mở'},

  ];


  stt: string= '';
  id: string = '';
  name:string= '';
  giaovien: string = '';
  description: string = '';

  index:number= 0;
  isShowForm:boolean = false;
  isAddstudents = true;
  fliterStatus = "All";
  constructor() { }

  ngOnInit(): void {
  }

}
