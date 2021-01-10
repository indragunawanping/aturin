import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  handleItemClick() {
    this.router.navigateByUrl('/storage-detail');
  }
}
