import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { GetallcustomersComponent } from '../getallcustomers/getallcustomers.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  data: any;
  keys: any;
  constructor(private _mainService: MainService, private router: Router
   // , public ggggg: GetallcustomersComponent  
  ) {}

  ngOnInit() {}

  clickHandler(route: string) {
    alert('aaaaa');
    let g = new GetallcustomersComponent(this._mainService);
    this.data = g.clickHandler(route);
   // GetallcustomersComponent.call(GetallcustomersComponent.clickHandler(route));
    this._mainService.request(route).subscribe(res => {
      if(res instanceof Object && !res.hasOwnProperty('result')){
        this.data = [];
        this.data.push(res);
      } else {
        this.data = (res as any).result;
      }
        this.keys = [];
      
      this.data.forEach((item, i) => {
        this.keys[i] = Object.keys(item);
      });
    });
  }

  
}

interface customer {
  id: number,
  custName: string
}
