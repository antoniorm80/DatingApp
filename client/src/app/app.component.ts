import { AccountService } from './_services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  oneAtATime = true;


 constructor(private http: HttpClient, public accountService: AccountService){}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  // getUsers() {
  //     // this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     //   this.users = response;
  //     // }, error => {
  //     //   console.log(error);
  //     // });
      
  //     // // <!-- eCommerce - Postman -->
  //     // this.http.get('https://dasnube.com/api/productos/stock/4c7a217760a8d3d7e5d8d8974464329b').subscribe({
  //     //   next: response => this.users = response,
  //     //   error: error => console.log(error)
  //     // })

  //     // // <!-- Tyhke Mexico -->
  //     // this.http.get('https://www.tykhe.com.mx/wp-json/wp/v2/users').subscribe({
  //     //   next: response => this.users = response,
  //     //   error: error => console.log(error)
  //     // })

  //     this.http.get('https://localhost:5001/api/users').subscribe({
  //       next: response => this.users = response,
  //       error: error => console.log(error)
  //     })
  //   }
}
