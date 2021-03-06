import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  data: any;
  keys: any;
  constructor(private _mainService: MainService, private router: Router 
  ) {}

  ngOnInit() {}

  clickHandler(route: string) {
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
