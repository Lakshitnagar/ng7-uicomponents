import { Component, OnInit, Input } from '@angular/core';
import { CurrentLevelData } from '../interfaces/current-level-data';

@Component({
  selector: 'app-create-tree',
  templateUrl: './create-tree.component.html',
  styleUrls: ['./create-tree.component.scss']
})
export class CreateTreeComponent implements OnInit {
  @Input() tree: any;
  @Input() treeConfig: any;

  public currentLevelData: CurrentLevelData[] = [];
  public hideStatus: any = [];
  public indentationSpace: any = [];
  public childTreeConfig: any;

  constructor() { }

  ngOnInit() {
    this.indentationSpace = new Array(this.treeConfig.indentation);
    this.childTreeConfig = {
      indentation: this.treeConfig.indentation + 1,
      hideChildren: this.treeConfig.hideChildren
    };

    if (this.isObjectUtility(this.tree))
    Object.keys(this.tree).forEach((data) => {
      let currentItemData = {
        data: data,
        isHidden: true,
        isDisabled: false
      };

      this.currentLevelData.push(currentItemData);
    });

  }

  isObjectUtility(obj) {
    return Object.prototype.toString.call(obj) == '[object Object]';
  }

}
