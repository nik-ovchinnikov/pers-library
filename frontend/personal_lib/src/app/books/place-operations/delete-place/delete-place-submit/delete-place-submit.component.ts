import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-place-submit',
  templateUrl: './delete-place-submit.component.html',
  styleUrls: ['./delete-place-submit.component.css']
})
export class DeletePlaceSubmitComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl("/");
    }, 1500);
  }

}
