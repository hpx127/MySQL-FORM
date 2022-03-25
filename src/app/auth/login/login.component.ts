import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import Swal from 'sweetalert2';
import { logModel } from './logModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _common:CommonService,private _router:Router) { }

   ldata:logModel = new logModel();
   error:any="";

  contactForm = new FormGroup({   
    email: new FormControl(),
    password: new FormControl()
  })

  onCheck(putDta:any)
  {
      this.ldata = this.contactForm. value as logModel;

      var chckData = this._common.check(this.ldata).subscribe((res: any) => {

        if (res.msg != null) {
          
  
          this._router.navigate(['/home']);
        }
  
        else
         {
              Swal.fire({
              title: "Ooops!",
              text: res.error,
              icon: "warning",
              timer: 1500
              })
        }
  
        putDta.reset();
      },
        (err: any) => this.error = err);
  }

  ngOnInit(): void {
  }

}
