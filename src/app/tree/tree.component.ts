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
    "Array": ["5bf83ac18b4b3361cefacacf", 1, 2],
    "Null": null,
    "Object": {
      "Array": ["5bf83ac18b4b3361cefacacf", 1, 2],
      "Null": null,
      "Object": {
        "Array": ["5bf83ac18b4b3361cefacacf", 1, 2],
        "Null": null,
        "Object": {
          "Array": ["5bf83ac18b4b3361cefacacf", 1, 2],
          "Null": null,
          "Object": {
            "Array": ["5bf83ac18b4b3361cefacacf", 1, 2],
            "Null": null,
            "Object": {
              "Array": ["5bf83ac18b4b3361cefacacf", 1, 2],
              "Null": null,
              "Object": {
                "Array": ["5bf83ac18b4b3361cefacacf", 1, 2],
                "Null": null,
                "Object": {
                  "a":"b"
                },
                "Boolean": false,
                "Number": 12345,
                "String": "http://placehold.it/32x32",
                "undefined": undefined,
                "Empty Object": {},
              },
              "Boolean": false,
              "Number": 12345,
              "String": "http://placehold.it/32x32",
              "undefined": undefined,
              "Empty Object": {},
            },
            "Boolean": false,
            "Number": 12345,
            "String": "http://placehold.it/32x32",
            "undefined": undefined,
            "Empty Object": {},
          },
          "Boolean": false,
          "Number": 12345,
          "String": "http://placehold.it/32x32",
          "undefined": undefined,
          "Empty Object": {},
        },
        "Boolean": false,
        "Number": 12345,
        "String": "http://placehold.it/32x32",
        "undefined": undefined,
        "Empty Object": {},
      },
      "Boolean": false,
      "Number": 12345,
      "String": "http://placehold.it/32x32",
      "undefined": undefined,
      "Empty Object": {},
    },
    "Boolean": false,
    "Number": 12345,
    "String": "http://placehold.it/32x32",
    "undefined": undefined,
    "Empty Object": {},
  };

  constructor() { }

  ngOnInit() {
  }

}
