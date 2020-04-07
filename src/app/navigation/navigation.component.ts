import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

interface Navigation {
  label?: string;
  icon?: string;
  path: string[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationList: Navigation[];

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.navigationList = this.activeRoute.routeConfig.children.map((child): Navigation => ({
      path: [child.path],
      label: child.data && child.data.label,
      icon: child.data && child.data.icon,
    }));
  }
}
