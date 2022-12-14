import { AccountService } from './../_services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFormHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
