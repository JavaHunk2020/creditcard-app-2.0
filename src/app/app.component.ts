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
  //creating black object of typeLogin
  login:Login={} as Login;

  title = 'creditcard-app';
  public message:string='';

  //How many ways you can make declaration??
  process() {
        if(this.login.username==='jack' && this.login.password==='jill') {
               this.message="Cool username and password are right!";
        }  else {
          this.message="Sorry username and password are not correct!";
        }
       // let login=new Login(this.username,this.password,this.message,new Date());
        this.login.cdate=new Date();
        let clonedObject=Object.assign(this.login);
        this.logins.push(clonedObject);
        this.login={} as Login;

  }
}
