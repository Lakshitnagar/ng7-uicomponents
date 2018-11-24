import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-tree',
  templateUrl: './create-tree.component.html',
  styleUrls: ['./create-tree.component.scss']
})
export class CreateTreeComponent implements OnInit {
  @Input() treeConfig: any;
  @Input() indentation: number;

  public currentLevelData: any = [];
  public indentationSpace: any = new Array(this.indentation);

  constructor() { }

  ngOnInit() {
    this.indentationSpace = new Array(this.indentation);
    if (Object.prototype.toString.call(this.treeConfig) == '[object Object]')
      this.currentLevelData = Object.keys(this.treeConfig);
  }

}
