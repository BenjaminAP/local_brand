import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {IShop} from '../../../../models/i.shop';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {ShopService} from '../../../../components/shop/shop.service';
import {MatPaginator} from '@angular/material/paginator';

const ELEMENT_DATA: IShop[] = [
  {
    id: '1',
    name: 'Jam',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://www.shopjampr.com',
    powered_by: 'Shopify',
    store_type: 'Boutique',
    attire_type: [
      'Clothing',
      null
    ],
    social_media_tag: '@shopjampr',
    country: [
      'Puerto Rico',
      null
    ],
    state: '',
    city: [
      '',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/43129923_159952481610871_8152921480653438976_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=X6PU7B-FvUYAX-MF0kY&oh=807bac9c573565a915ac0d00bf7ad395&oe=5FB775F3'
  },
  {
    id: '2',
    name: 'Aloha Sandals',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://www.alohas.io',
    powered_by: 'Shopify',
    store_type: 'Brand',
    attire_type: [
      'Shoes',
      null
    ],
    social_media_tag: '@alohas',
    country: [
      'España',
      null
    ],
    state: '',
    city: [
      'Barcelona',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/103940817_279911593201294_4936711103091584414_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=al2Jb_wd-LUAX_F7K9i&oh=4733214c5263743cc3d792c5a5717582&oe=5FB8EDB9'
  },
  {
    id: '3',
    name: 'Gypsy Beach',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://snapppt.com/gypsy_beach',
    powered_by: 'SNPT',
    store_type: 'Store',
    attire_type: [
      'Swimwear',
      'Beachwear'
    ],
    social_media_tag: '@gypsy_beach',
    country: [
      'Unknown',
      null
    ],
    state: '',
    city: [
      '',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/11351670_1683952935171599_932888717_a.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=bp9cGe-Nh30AX9KIqKI&oh=acacfc5a50bb7cfc4b7c7d98eaa215c5&oe=5FB6A7CA'
  },
  {
    id: '4',
    name: 'Fleur of England',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://www.fleurofengland.com',
    powered_by: '',
    store_type: 'Brand',
    attire_type: [
      'Lingerie',
      null
    ],
    social_media_tag: '@fleurofengland',
    country: [
      'England',
      null
    ],
    state: '',
    city: [
      '',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/83115241_168213011081837_1429592118015295488_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=Oy6qwL2xirIAX839VJh&oh=899438233f6d526b30acb15dfb25c44f&oe=5FB6DA8A'
  },
  {
    id: '5',
    name: 'Costa Jewelry',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://costajewelrypr.com',
    powered_by: 'Shopify',
    store_type: 'Brand',
    attire_type: [
      'Jewelry',
      null
    ],
    social_media_tag: '@costajewelry_bytmt',
    country: [
      'Puerto Rico',
      null
    ],
    state: '',
    city: [
      'San Juan',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/95369548_593729811501415_3630767289621544960_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=eMH3a23P4rAAX_TqkTm&oh=299b43fd0576d74b390e30aee0190741&oe=5FB6F2D3'
  },
  {
    id: '6',
    name: 'Baghsu Jewels',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://bahgsujewels.com',
    powered_by: '',
    store_type: 'Brand',
    attire_type: [
      'Jewelry',
      null
    ],
    social_media_tag: '@bahgsujewels',
    country: [
      'Unknown',
      null
    ],
    state: '',
    city: [
      '',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/69945956_388679942079871_7946652343368417280_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=x-B2lgvazXgAX-tn4lw&oh=39dc43ece191cef20d592a0cd7843e2b&oe=5FB6A3F1'
  },
  {
    id: '7',
    name: 'BuDhaGirl',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://budhagirl.com',
    powered_by: '',
    store_type: 'Brand',
    attire_type: [
      'Jewelry',
      null
    ],
    social_media_tag: '@budhagirl',
    country: [
      'United States',
      null
    ],
    state: 'Texas',
    city: [
      '',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/98478419_2948542595236015_418847654542311424_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=IyVgyUa3FcgAX94K_q_&oh=1d673c3a814aad663e3e70cfa8c1dae8&oe=5FB5E094'
  },
  {
    id: '8',
    name: 'Stillo Boutique ny Camille',
    social_media: [
      'Instagram',
      null
    ],
    url: 'https://sttilobtq.com',
    powered_by: 'Shopify',
    store_type: 'Boutique',
    attire_type: [
      'Cloth/Designer',
      null
    ],
    social_media_tag: '@sttilobtq',
    country: [
      'Puerto Rico',
      null
    ],
    state: '',
    city: [
      'San Juan',
      null
    ],
    email: '',
    image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/120908816_688417291776996_488417178551617383_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=KqqB72Q3F5EAX8i6tCL&oh=3f8680096791b7bac4e6dd40a8e182b7&oe=5FB7E541'
  }];

const temp2 = [
  'id', 'name', 'social_media',
  'social_media_tag', 'email', 'url',
  'attire_type', 'state', 'image',
  'country', 'city', 'store_type', 'powered_by' ];

@Component({
  selector: 'app-shops-table',
  templateUrl: './shops-table.component.html',
  styleUrls: ['./shops-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ShopsTableComponent implements AfterViewInit {

  allShops$: Observable<IShop[]>;

  columnsToDisplay: string[] = [
    'id', 'name', 'social_media',
    'social_media_tag', 'email', 'url',
    'attire_type', 'state',
    'country', 'city', 'store_type', 'powered_by' ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  expandedElement: IShop | null;


  constructor(private shopService: ShopService) {

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // applyFilter(event: Event): void {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
