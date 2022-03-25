
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs/operators';
import { CommonService } from 'src/app/service/common.service';
import Swal from 'sweetalert2';
import { regisModel } from './regisModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _common: CommonService, private _router: Router) { }

  data: regisModel = new regisModel();
  error:any='';


  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    number: new FormControl(),
    password: new FormControl()
  })

  onSubmit(inpData: any)
  
  {
    this.data = this.contactForm.value as regisModel;
    console.log(this.data);

    var insertData = this._common.insert(this.data).subscribe((res: any) => {

      if (res.msg) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: res.msg,
          showConfirmButton: true,
          timer: 5000
        })

        this._router.navigate(['/auth/login']);
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

      inpData.reset();
    },
      (err: any) => this.error = err); 

  }

  ngOnInit(): void {
  }

}
