import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selectedNode = null;

  public model: go.TreeModel = new go.TreeModel(
    [
      { 'key': 1, 'name': 'A' },
      { 'key': 2, 'name': 'B', 'parent': 1 },
      { 'key': 3, 'name': 'C', 'parent': 2 },
      { 'key': 4, 'name': 'D', 'parent': 1 },
      { 'key': 5, 'name': 'E', 'parent': 4 },
      { 'key': 6, 'name': 'F', 'parent': 2 },
      { 'key': 7, 'name': 'G', 'parent': 3 },
      { 'key': 8, 'name': 'H', 'parent': 5 },
      { 'key': 9, 'name': 'I', 'parent': 6 },
      { 'key': 10, 'name': 'J', 'parent': 4 },
      { 'key': 11, 'name': 'L', 'parent': 5 },
      { 'key': 12, 'name': 'M', 'parent': 10 },
      { 'key': 13, 'name': 'N', 'parent': 10 },
      { 'key': 14, 'name': 'O', 'parent': 10 },
      { 'key': 15, 'name': 'P', 'parent': 5 },
      { 'key': 16, 'name': 'Q', 'parent': 3 }
    ]
  );

  public setSelectedNode(node) {
    this.selectedNode = node;
  }

}
