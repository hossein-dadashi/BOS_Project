import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenuTab: string = 'services' || 'contactUs' || 'home';

  constructor() { }

  ngOnInit() {
  }


  goToTab(tabName: string) {
    this.activeMenuTab = tabName;
  }

}
