import { Component, OnInit, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getallcustomers',
  templateUrl: './getallcustomers.component.html',
  styleUrls: ['./getallcustomers.component.scss']
})

export class GetallcustomersComponent implements OnInit {
  data: any;
  keys: any;
  constructor(private _mainService: MainService, private router: Router ) {}

  ngOnInit() {
    this._mainService.request('getallcustomers').subscribe(res => {
      this.data = (res as any);
      this.keys = [];
      
      this.data.forEach((item, i) => {
        this.keys[i] = Object.keys(item);
      });
      
    });
  }

  clickHandler(route: string) {
    this._mainService.request(route).subscribe(res => {
      if(res && !(res instanceof Array) && !res.hasOwnProperty('result')){
        this.data = [];
        this.data.push(res);
      } else {
          this.data = (res as any);
      }
      this.keys = [];
      if(this.data) 
        this.data.forEach((item, i) => {
          this.keys[i] = Object.keys(item);
        });
      
    });
    // return this.data;
  }
}

interface customer {
  id: number,
  custName: string
}
