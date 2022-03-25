import { Component, OnInit } from '@angular/core';
import { regisModel } from '../auth/signup/regisModel';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _com: CommonService) {}

  user: regisModel[] = [];
  error: any;
  viewData() {
    this._com.get().subscribe(
      (res: regisModel[]) => {
        this.user = res;
      },
      (err) => (this.error = err)
    );
  }

  ngOnInit(): void {
    this.viewData();
  }
}
