import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { APP_NAVIGATION } from './navigation.constants';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [NavigationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
  });

  describe('Component', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set navigation items correctly', () => {
      expect(component.navigationItems).toEqual(APP_NAVIGATION);
    });
  });
});
