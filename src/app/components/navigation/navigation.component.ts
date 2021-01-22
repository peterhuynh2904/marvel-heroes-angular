import { ChangeDetectionStrategy, Component } from '@angular/core';

import { APP_NAVIGATION } from './navigation.constants';
import { INavigation } from './navigation.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  navigationItems: INavigation[] = APP_NAVIGATION;
}
