import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {

  data = null;
  name: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.paramMap.get('data');
    this.name = this.data.name;
  }

}
