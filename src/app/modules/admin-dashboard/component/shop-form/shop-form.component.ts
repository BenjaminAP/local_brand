import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit, OnDestroy {

  shopForm: FormGroup;

  @Input()
  saveEvent: Observable<void>;

  subscriptions: Subscription;

  constructor() {
  }

  ngOnInit(): void {

    this.subscriptions = this.saveEvent.subscribe(() => this.saveForm());

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

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  saveForm(): void {
    console.log(this.shopForm.value);
  }
}
