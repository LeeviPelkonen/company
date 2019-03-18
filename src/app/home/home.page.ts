import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id: string;
  name: string;
  data: any;
  value = 0;
  mediaURL: "http://avoindata.prh.fi/bis/v1/";

  constructor(
    private http: HTTP,
    private router: Router,
    private storage: Storage
  ) {
  }

  search(){
    console.log("searching now");
    this.http.get("http://avoindata.prh.fi/bis/v1/" + this.id, {}, {})
      .then(data => {
        console.log(JSON.parse(data.data).results[0]);
        this.data = JSON.parse(data.data).results;
        console.log(this.data[0].name);
        console.log(this.data[0].names);
      });
  }
  go(data: any){
    this.storage.set('data', data);
    this.storage.set('language', this.value);
    this.router.navigate(['details']);
  }
}
