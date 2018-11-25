import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public treeConfig = {
    indentation: 0,
    hideChildren: true,
  };

  public tree = {
    "_id": "5bf83ac18b4b3361cefacacf",
    "index": 5,
    "guid": {
      "_id": "5bf83ac18b4b3361cefacacf",
      "index": 5,
      "guid": "f78aaf00-8bac-4748-9b2c-e1fd47a225f6",
      "isActive": false,
      "balance": "$2,062.75",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": "Cleo Landry",
      "gender": "female",
      "company": "REALMO",
      "email": "cleolandry@realmo.com",
      "phone": "+1 (818) 590-2045",
      "address": {
        "_id": "5bf83ac18b4b3361cefacacf",
        "index": 5,
        "guid": "f78aaf00-8bac-4748-9b2c-e1fd47a225f6",
        "isActive": false,
        "balance": "$2,062.75",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "blue",
        "name": "Cleo Landry",
        "gender": "female",
        "company": "REALMO",
        "email": "cleolandry@realmo.com",
        "phone": "+1 (818) 590-2045",
        "address": {
          "_id": "5bf83ac18b4b3361cefacacf",
          "index": 5,
          "guid": "f78aaf00-8bac-4748-9b2c-e1fd47a225f6",
          "isActive": false,
          "balance": "$2,062.75",
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "eyeColor": "blue",
          "name": "Cleo Landry",
          "gender": "female",
          "company": "REALMO",
          "email": "cleolandry@realmo.com",
          "phone": "+1 (818) 590-2045",
          "address": "280 Remsen Avenue, Yogaville, Utah, 2910",
          "about": "Ea mollit magna dolor tempor qui anim ex cupidatat id sit pariatur quis adipisicing esse. Commodo veniam sit tempor occaecat do culpa occaecat est magna reprehenderit ex elit et. Nisi id occaecat tempor adipisicing pariatur ullamco incididunt anim laborum ipsum veniam cupidatat Lorem.\r\n",
          "registered": "2018-10-08T12:23:12 -06:-30",
          "latitude": 67.155573,
          "longitude": 74.572607,
          "greeting": "Hello, Cleo Landry! You have 2 unread messages.",
          "favoriteFruit": "strawberry"
        },
        "about": "Ea mollit magna dolor tempor qui anim ex cupidatat id sit pariatur quis adipisicing esse. Commodo veniam sit tempor occaecat do culpa occaecat est magna reprehenderit ex elit et. Nisi id occaecat tempor adipisicing pariatur ullamco incididunt anim laborum ipsum veniam cupidatat Lorem.\r\n",
        "registered": "2018-10-08T12:23:12 -06:-30",
        "latitude": 67.155573,
        "longitude": 74.572607,
        "greeting": "Hello, Cleo Landry! You have 2 unread messages.",
        "favoriteFruit": "strawberry"
      },
      "about": "Ea mollit magna dolor tempor qui anim ex cupidatat id sit pariatur quis adipisicing esse. Commodo veniam sit tempor occaecat do culpa occaecat est magna reprehenderit ex elit et. Nisi id occaecat tempor adipisicing pariatur ullamco incididunt anim laborum ipsum veniam cupidatat Lorem.\r\n",
      "registered": "2018-10-08T12:23:12 -06:-30",
      "latitude": 67.155573,
      "longitude": 74.572607,
      "greeting": "Hello, Cleo Landry! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    },
    "isActive": false,
    "balance": "$2,062.75",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Cleo Landry",
    "gender": "female",
    "company": "REALMO",
    "email": "cleolandry@realmo.com",
    "phone": "+1 (818) 590-2045",
    "address": "280 Remsen Avenue, Yogaville, Utah, 2910",
    "about": "Ea mollit magna dolor tempor qui anim ex cupidatat id sit pariatur quis adipisicing esse. Commodo veniam sit tempor occaecat do culpa occaecat est magna reprehenderit ex elit et. Nisi id occaecat tempor adipisicing pariatur ullamco incididunt anim laborum ipsum veniam cupidatat Lorem.\r\n",
    "registered": "2018-10-08T12:23:12 -06:-30",
    "latitude": 67.155573,
    "longitude": 74.572607,
    "greeting": "Hello, Cleo Landry! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  };

  constructor() { }

  ngOnInit() {
  }

}
