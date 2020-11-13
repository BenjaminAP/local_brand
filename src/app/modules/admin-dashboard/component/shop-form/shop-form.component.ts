import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {

  shopForm: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.shopForm = new FormGroup({
      name: new FormControl(''),
      social_media: new FormControl(''),
      social_media_tag: new FormControl(''),
      email: new FormControl(''),
      url: new FormControl(''),
      attire_type: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      store_type: new FormControl(''),
      powered_by: new FormControl(''),
      img_url: new FormControl(''),
    });
  }


  saveForm(): void {
    console.log(this.shopForm.value);
  }
}
