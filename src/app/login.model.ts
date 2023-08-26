export class Login {
  
    username:string;
    message:string;
    password:string;
    cdate:Date;
    
    constructor(username:string,message:string,password:string,cdate:Date){
         this.cdate=cdate;
         this.message=message;
         this.password=password;
         this.username=username;
    }
} 