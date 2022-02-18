import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-change-place-submit',
  templateUrl: './after-change-place-submit.component.html',
  styleUrls: ['./after-change-place-submit.component.css']
})
export class AfterChangePlaceSubmitComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl("/");
    }, 1500);
  }

}
