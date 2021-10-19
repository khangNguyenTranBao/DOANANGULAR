import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsdiemhocsinh',
  templateUrl: './dsdiemhocsinh.component.html',
  styleUrls: ['./dsdiemhocsinh.component.css']
})
export class DsdiemhocsinhComponent implements OnInit {
  students:any [] = [
    {stt:1,id:112, name: 'Bùi Như Ý', toan:5.5, li:3,hoa:6.8, sinh:5.5, tin: 9, van:10,lichsu:7, diali:3},
    {stt:2,id:123, name: 'Nguyễn Xuân Như', toan:3, li:8,hoa:7, sinh:6, tin: 8, van:7,lichsu:4, diali:8},
    {stt:3,id:321, name: 'Bùi Xuân Như', toan:9, li:3,hoa:2, sinh:5.5, tin: 9, van:10,lichsu:7, diali:9},
    {stt:4,id:153, name: 'Nguyễn Lê Minh', toan:8, li:3,hoa:5, sinh:5.5, tin: 9, van:10,lichsu:7, diali:7},
    {stt:5,id:758, name: 'Lương Thiện Minh', toan:5.5, li:3,hoa:4, sinh:5.5, tin: 9, van:10,lichsu:7, diali:3},
    {stt:6,id:983, name: 'Đỗ Nhất Tâm', toan:6.3, li:3,hoa:8, sinh:5.5, tin: 9, van:10,lichsu:7, diali:7},
    {stt:7,id:435, name: 'Như Ý', toan:9.5, li:3,hoa:6.8, sinh:9, tin: 9, van:10,lichsu:7, diali:4},
    {stt:8,id:726, name: 'Đoàn Dự', toan:8.6, li:5,hoa:5, sinh:8, tin: 6, van:5,lichsu:8, diali:2},
    {stt:9,id:444, name: 'Dương Quá', toan:10, li:8.9,hoa:2, sinh:1, tin: 7, van:5,lichsu:4, diali:2},
    {stt:10,id:555, name: 'Vui Thị Tươi', toan:2, li:9,hoa:4, sinh:0, tin: 5, van:10,lichsu:2, diali:2},
    {stt:11,id:666, name: 'Nguyễn Nguyên', toan:1, li:10,hoa:3, sinh:0, tin: 4, van:9,lichsu:38, diali:2},
    {stt:12,id:113, name: 'Vịnh Xuân Quyền', toan:5.5, li:3,hoa:6.8, sinh:5.5, tin: 9, van:10,lichsu:7, diali:3},
    {stt:13,id:114, name: 'Nguyễn HAHA', toan:3, li:8,hoa:7, sinh:6, tin: 8, van:7,lichsu:4, diali:8},
    {stt:14,id:115, name: 'Tân Lập', toan:9, li:3,hoa:2, sinh:5.5, tin: 9, van:10,lichsu:7, diali:9},
    {stt:15,id:116, name: 'Nguyễn Lê Minh', toan:8, li:3,hoa:5, sinh:5.5, tin: 9, van:10,lichsu:7, diali:7},
    {stt:16,id:117, name: 'Huỳnh Thiện Minh', toan:5.5, li:3,hoa:4, sinh:5.5, tin: 9, van:10,lichsu:7, diali:3},
    {stt:17,id:118, name: 'Đỗ Nhất Tâm', toan:6.3, li:3,hoa:8, sinh:5.5, tin: 9, van:10,lichsu:7, diali:7},
    {stt:18,id:119, name: 'Như Ý', toan:9.5, li:3,hoa:6.8, sinh:9, tin: 9, van:10,lichsu:7, diali:4},
    {stt:19,id:589, name: 'Đoàn Dự', toan:8.6, li:5,hoa:5, sinh:8, tin: 6, van:5,lichsu:8, diali:2},
    {stt:20,id:376, name: 'Dương Quá', toan:10, li:8.9,hoa:2, sinh:1, tin: 7, van:5,lichsu:4, diali:2},
    {stt:21,id:888, name: 'Vui Thị Tươi', toan:2, li:9,hoa:4, sinh:0, tin: 5, van:10,lichsu:2, diali:2},
    {stt:22,id:582, name: 'Nguyễn Nguyên', toan:1, li:10,hoa:3, sinh:0, tin: 4, van:9,lichsu:38, diali:2},
  ];


  stt: string= '';
  id: string = '';
  name:string= '';
  toan:string= '';
  li:string= '';
  hoa:string= '';
  sinh:string= '';
  tin:string= '';
  van:string= '';
  lichsu:string= '';
  diali:string= '';

  index:number= 0;
  isShowForm:boolean = false;
  isAddstudents = true;
  fliterStatus = "All";


  constructor() { }

  ngOnInit(): void {
  }

  addStudents(){
    if (this.isAddstudents){
      this.students.unshift({stt:this.stt,id: this.students.length+1,name:this.name, toan:this.toan, li:this.li,
      hoa:this.hoa, sinh:this.sinh,tin:this.tin, van:this.van, lichsu:this.lichsu, diali:this.diali});
    }
    else{
      this.students[this.index].stt = this.stt;
      this.students[this.index].id = this.id;
      this.students[this.index].name = this.name;
      this.students[this.index].toan = this.toan;
      this.students[this.index].li = this.li;
      this.students[this.index].hoa= this.hoa;
      this.students[this.index].sinh= this.sinh;
      this.students[this.index].tin= this.tin;
      this.students[this.index].van= this.van;
      this.students[this.index].lichsu= this.lichsu;
      this.students[this.index].diali= this.diali;
    }
  }

  removestudents(stt:number){
    const index = this.students.findIndex(b => b.stt ===stt)
    this.students.splice(index,1);
  }
  //getShowStudent(stt:number){
  // const dkALL = this.fliterStatus ==='ALL';
  //const dkGreater = this.fliterStatus ===
  //}

  updateStudent(stt:number){
    this.index = this.students.findIndex(b => b.stt === stt);
    this.id = this.students[this.index].id;
    this.name = this.students[this.index].name;
    this.toan = this.students[this.index].toan;
    this.hoa = this.students[this.index].hoa;
    this.sinh = this.students[this.index].sinh;
    this.tin = this.students[this.index].tin;
    this.van = this.students[this.index].van;
    this.lichsu = this.students[this.index].lichsu;
    this.diali = this.students[this.index].diali;
  }
}
