import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-change-type-submit',
  templateUrl: './after-change-type-submit.component.html',
  styleUrls: ['./after-change-type-submit.component.css']
})
export class AfterChangeTypeSubmitComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl("/");
    }, 1500);
  }

}
