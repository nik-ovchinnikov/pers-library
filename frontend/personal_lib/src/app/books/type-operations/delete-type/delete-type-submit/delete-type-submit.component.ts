import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-type-submit',
  templateUrl: './delete-type-submit.component.html',
  styleUrls: ['./delete-type-submit.component.css']
})
export class DeleteTypeSubmitComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl("/");
    }, 1500);
  }

}
