import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: any;
  i: string;

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('language').then((i) => {
      this.i = i;
      console.log(i);
    });
    this.storage.get('data').then((val) => {
      this.data = val;
    });
  }
}
