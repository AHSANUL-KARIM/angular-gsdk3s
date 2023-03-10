import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTab } from '@angular/material';
import { MatTabGroup } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material/typings/esm5/tabs/public-api';
import { DragScrollComponent } from 'ngx-drag-scroll';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tab-group-dynamic-example',
  templateUrl: 'tab-group-dynamic-example.html',
  styleUrls: ['tab-group-dynamic-example.css'],
})
export class TabGroupDynamicExample {
  @ViewChild('nav', { read: DragScrollComponent })
  ds: DragScrollComponent;
  @ViewChild('mtg')
  mtg: MatTabGroup;
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  tabChangeEVent(event: MatTabChangeEvent) {
    //this.selected.setValue(event.index);
    console.log(this.mtg);
    //this.mtg._focusChanged(event.index);
  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
