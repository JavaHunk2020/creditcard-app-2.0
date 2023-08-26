import { Component } from '@angular/core';
import { Login } from './login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Login logins[]=new Login[12];
  logins:Login[]=[];

  title = 'creditcard-app';
  public message:string='';

  //How many ways you can make declaration??
  process(username: HTMLInputElement,password: HTMLInputElement) {
        let pusername=username.value;
        let ppassword=password.value;
        if(pusername==='jack' && ppassword==='jill') {
               this.message="Cool username and password are right!";
        }  else {
          this.message="Sorry username and password are not correct!";
        }
        let login=new Login(pusername,ppassword,this.message,new Date());
        this.logins.push(login);

  }
}
