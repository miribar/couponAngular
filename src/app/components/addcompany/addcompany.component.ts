import { Component, Input ,Output,OnInit } from '@angular/core';
import {FormControl, FormsModule,Validators, FormGroup} from '@angular/forms';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  @Output() formGroup:any;
  compName: string;
  password: string;
  email: string;

  constructor(private _mainService: MainService) { }
  ngOnInit() {
  }
  onSubmit() {

    console.log(this.compName);

    let request = {
      compName: this.compName,
      password: this.password,
      email: this.email
    };

    this._mainService.requestPost('createcompany', request ).subscribe(res => {
      console.log(res);
    });
  }
}
