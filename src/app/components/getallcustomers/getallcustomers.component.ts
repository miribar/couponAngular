import { Component, OnInit, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-getallcustomers',
  templateUrl: './getallcustomers.component.html',
  styleUrls: ['./getallcustomers.component.scss']
})

export class GetallcustomersComponent implements OnInit {
  data: any;
  keys: any;
  constructor(private _mainService: MainService) {}

  ngOnInit() {

  }

  clickHandler(route: string) {
    alert('bbbb'+ route);
    this._mainService.request(route).subscribe(res => {
      // if(res instanceof Object && !res.hasOwnProperty('result')){
      //   this.data = [];
      //   this.data.push(res);
      // } else {
          this.data = (res as any).result;
          alert(JSON.stringify(this.data))
    //  }
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
