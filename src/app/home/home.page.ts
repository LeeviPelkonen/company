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
  data = [];
  filteredData = {
    "names": [],
    "auxiliaryNames": [],
    "addresses": [],
    "companyForms": [],
    "businessLines": [],
    "languages": [],
    "registedOffices": [],
    "contactDetails": [],
    "registeredEntries": [],
    "businessIdChanges": []
  }
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
    this.data=[];
    this.filteredData = {
      "names": [],
      "auxiliaryNames": [],
      "addresses": [],
      "companyForms": [],
      "businessLines": [],
      "languages": [],
      "registedOffices": [],
      "contactDetails": [],
      "registeredEntries": [],
      "businessIdChanges": []
    };
    this.http.get("http://avoindata.prh.fi/bis/v1/" + this.id, {}, {})
      .then(data => {
        this.filterData(JSON.parse(data.data).results);
      });
  }

  go(data: any){
    this.storage.set('data', data);
    this.storage.set('language', this.value);
    this.router.navigate(['details']);
  }

  filterData(datas:any){
    datas.forEach(data => {
    //filtering outdated and unnecessary data
    //names
    console.log("filtering this");
    //console.log(data);
    data.names.forEach(res => {
      if(res.version == 1){
        this.filteredData.names.push(res);
      }
    });
    //auxiliaryNames
    data.auxiliaryNames.forEach(res => {
      if(res.version == 1){
        console.log(res);
        this.filteredData.auxiliaryNames.push(res);
      }
    });
    //addresses
    data.addresses.forEach(res => {
      if(res.version == 1 && res.type == 1){
        console.log(res);
        this.filteredData.addresses.push(res);
      }
    });
    //companyForms
    data.companyForms.forEach(res => {
      if(res.version == 1){
        this.filteredData.companyForms.push(res);
      }
    });
    //businessLines
    data.businessLines.forEach(res => {
      if(res.version == 1){
        this.filteredData.businessLines.push(res);
      }
    });
    //languages
    data.languages.forEach(res => {
      if(res.version == 1){
        this.filteredData.languages.push(res);
      }
    });
    //registedOffices
    data.registedOffices.forEach(res => {
      if(res.version == 1){
        this.filteredData.registedOffices.push(res);
      }
    });
    //contactDetails
    data.contactDetails.forEach(res => {
      if(res.version == 1){
        this.filteredData.contactDetails.push(res);
      }
    });
    //registeredEntries
    data.registeredEntries.forEach(res => {
      if(res.version == 1){
        this.filteredData.registeredEntries.push(res);
      }
    });
    //businessIdChanges
    data.businessIdChanges.forEach(res => {
      if(res.version == 1){
        this.filteredData.businessIdChanges.push(res);
      }
    });
    this.data.push(this.filteredData);
  });
  }
}
