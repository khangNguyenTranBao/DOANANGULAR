import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsmonhoc',
  templateUrl: './dsmonhoc.component.html',
  styleUrls: ['./dsmonhoc.component.css']
})
export class DsmonhocComponent implements OnInit {
  students:any [] = [
    {stt:1,id:11, name: 'Toán'},
    {stt:2,id:12, name: 'Lí'},
    {stt:3,id:13, name: 'Hóa'},
    {stt:4,id:14, name: 'Sinh'},
    {stt:5,id:15, name: 'Tin'},
    {stt:6,id:16, name: 'Văn'},
    {stt:7,id:17, name: 'Lịch Sử'},
    {stt:8,id:18, name: 'Địa lí'},
  ];


  stt: string= '';
  id: string = '';
  name:string= '';


  index:number= 0;
  isShowForm:boolean = false;
  isAddstudents = true;
  fliterStatus = "All";
  constructor() { }

  ngOnInit(): void {
  }
  removestudents(stt:number){
    const index = this.students.findIndex(b => b.stt ===stt)
    this.students.splice(index,1);
  }
}
