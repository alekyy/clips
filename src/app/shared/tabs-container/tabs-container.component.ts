import {
  Component,
  ContentChildren,
  AfterContentInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    const isAnyTabActive = this.tabs.some((tab) => tab.active);

    if (!isAnyTabActive) {
      this.selectTab(this.tabs!.first);
    }
  }

  getTabClass(isTabActive: boolean) {
    return isTabActive
      ? 'hover:text-white text-white bg-indigo-400'
      : 'hover:text-indigo-400';
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => (tab.active = false));
    tab.active = true;

    return false;
  }
}
