import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ICharacter } from '../../shared/interfaces/shared.interface';
import { ContextService } from '../../shared/services/context/context.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  @Input() character: ICharacter;

  constructor(private router: Router, private contextService: ContextService) {}

  onCardClick(): void {
    this.router.navigate([`/characters/${this.getCleanName(this.character.name)}/${this.character.id}`]);
  }

  characterThumbnail(): string {
    return this.contextService.getPortraitImage(this.character.thumbnail);
  }

  private getCleanName(name: string): string {
    return name.replace(/[^a-zA-Z\- ]/g, '').replace(/\s/g, '-');
  }
}
