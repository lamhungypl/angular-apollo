import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  isCollapsed = false;
  constructor() {}

  ngOnInit(): void {}
}
