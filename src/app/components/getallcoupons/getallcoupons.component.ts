import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallcoupons',
  templateUrl: './getallcoupons.component.html',
  styleUrls: ['./getallcoupons.component.css']
})
export class GetallcouponsComponent implements OnInit {
  compID: string;
  data: any;
  keys: any;
  constructor(private _mainService: MainService, private router: Router) {}

  ngOnInit() {
    this._mainService.request('getallcoupons').subscribe(res => {
        this.data = (res as any);
        this.keys = [];
      
      this.data.forEach((item, i) => {
        this.keys[i] = Object.keys(item);
      });
    });
  }

  clickHandler(route: string) {
    this._mainService.request(route+'/'+this.compID).subscribe(res => {
      if(res && !(res instanceof Array) && !res.hasOwnProperty('result')){
        this.data = [];
        this.data.push(res);
      } else if(res){
          this.data = (res as any);
      }
      this.keys = [];
      if(this.data) {
          this.data.forEach((item, i) => {
          this.keys[i] = Object.keys(item);
        });
      }
      
    });

  }

  onSubmit() {

    this._mainService.request('getallcompanycoupons/'+this.compID).subscribe(res => {
      if(res && !(res instanceof Array) && !res.hasOwnProperty('result')){
        this.data = [];
        this.data.push(res);
      } else if(res){
          this.data = (res as any);
      }
      this.keys = [];
      if(this.data) {
          this.data.forEach((item, i) => {
          this.keys[i] = Object.keys(item);
        });
      }
      
    });
  }

}
