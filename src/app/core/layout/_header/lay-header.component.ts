import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-lay-header',
  templateUrl: './lay-header.component.html',
  styleUrls: ['./lay-header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() drawerToggle: MatDrawer;

  constructor() { }

  ngOnInit() {
  }

  drawerToggleClick() {
    if (this.drawerToggle) {
      this.drawerToggle.toggle();
    }
  }

}
