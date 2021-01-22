import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ContextService } from '../../shared/services/context/context.service';

import { CharacterCardComponent } from './character-card.component';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [CharacterCardComponent],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        ContextService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    component.character = {
      id: 'testId',
      name: 'testName',
      description: 'testDescription',
      thumbnail: {
        path: 'testpath.com',
        extension: 'jpg'
      }
    };
  });

  describe('Component', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    describe('onCardClick method', () => {
      it('should navigate to correct url', () => {
        component.onCardClick();
        expect((component as any).router.navigate).toHaveBeenCalledWith(['/characters/testName/testId']);
      });
    });

    describe('getCleanName method', () => {
      it('should return character url friendly name', () => {
        const friendlyName = (component as any).getCleanName('A-Bomb (HAS)');
        expect(friendlyName).toEqual('A-Bomb-HAS');
      });
    });

    describe('characterThumbnail method', () => {
      it('should return correct image url', () => {
        const imageUrl = component.characterThumbnail();
        expect(imageUrl).toEqual('testpath.com/portrait_uncanny.jpg');
      });
    });
  });
});
