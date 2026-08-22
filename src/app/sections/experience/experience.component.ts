import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';
import { ExperienceItem } from '../../shared/models/portfolio.models';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  items: ExperienceItem[] = EXPERIENCE;

  constructor(public i18n: I18nService) {}
}
