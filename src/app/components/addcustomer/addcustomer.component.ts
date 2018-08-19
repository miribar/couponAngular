import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  custName: string;
  password: string;
  constructor(private _mainService: MainService) { }

  ngOnInit() {
  }

  onSubmit() {
    
    console.log(this.custName);

    let request = {
      custName: this.custName,
      password: this.password
    };

    this._mainService.requestPost('createcustomer', request ).subscribe(res => {
      console.log(res);
    });
  }

}
