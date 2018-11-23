import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public treeConfig = {
    "text": "Parent 1",
    "id": "1",
    "nodes": [
      {
        "text": "Child 1",
        "id": "2",
        "parentid": "1",
        "nodes": [
          {
            "text": "Grandchild 1",
            "id": "4",
            "parentid": "2",
          },
          {
            "text": "Grandchild 2",
            "id": "8",
            "parentid": "2",
          }
        ]
      },
      {
        "text": "Child 2",
        "id": "10",
        "parentid": "1",
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
