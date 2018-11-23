import { Component, OnInit, Input } from '@angular/core';
import { isObject } from 'util';

@Component({
  selector: 'app-create-tree',
  templateUrl: './create-tree.component.html',
  styleUrls: ['./create-tree.component.scss']
})
export class CreateTreeComponent implements OnInit {
  @Input() treeConfig: any;

  public currentLevelData: any = [];

  constructor() { }

  ngOnInit() {
    if (isObject(this.treeConfig))
      this.currentLevelData = Object.keys(this.treeConfig);
  }

}
