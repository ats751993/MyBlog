import { Component } from '@angular/core';
import {BlogService} from './BlogService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl:"./RegistrationComponent.html",
  styleUrls:["./RegistrationComponent.css"]
})


export class RegistrationComponent {
    /* @Created Object That Takes String Value And Use for Two way binding for Registration Form */
    User={
          Name:'',
          Email:'',
          UserName:'',
          Password:'',
          ContactNo:'',
          Address:'',
    }
        /* End */

        /* @Created Array of object for Geting Login Detail*/ 
       detail:any=[];
        /* End */

      /* @Created Object That Takes String Value And Use for Two way binding for Login Form */
     Login={
      UserName:'',
      Password:''
     }
     /* End */

      /* @Created Constroctor for Creating object of Component */
          constructor(private blogSvc: BlogService,
          private actveroute:ActivatedRoute,
          private router:Router,) {}
    /* End */


       /* @Created function for Register User With no return type, It Will send object to blogService.ts file for Http call */
     add():void{
       debugger
     this.blogSvc.AddUserDetail(this.User).then(regis=>{
       alert("Record Inserted successfully..");
      });
    }
    /* End */

 /* @Created function for Login User With no return type, It Will send object to blogService.ts 
    file for Http call  And Get The object data*/
    login():void{
       debugger
     this.blogSvc.GetAlllogindetail(this.Login.UserName,this.Login.Password).then(regis=>{
       debugger
          this.detail=regis;
         if(this.detail==null) 
         {
          alert('Invalid UserName Or Password');
        }else
        this.router.navigate(['/test']);
          debugger
      });
    }
     /* End */
}
