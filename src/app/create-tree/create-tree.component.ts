import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-tree',
  templateUrl: './create-tree.component.html',
  styleUrls: ['./create-tree.component.scss']
})
export class CreateTreeComponent implements OnInit {
  @Input() tree: any;
  @Input() treeConfig: any;

  public currentLevelData: any = [];
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
      this.currentLevelData = Object.keys(this.tree);

    for (var i = 0; i < this.currentLevelData.length; i++) {
      this.hideStatus.push(true);
    }
  }

  isObjectUtility(obj) {
    return Object.prototype.toString.call(obj) == '[object Object]';
  }

}
