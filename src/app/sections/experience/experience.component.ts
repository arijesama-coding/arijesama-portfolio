import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';
import { ExperienceItem } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  items: ExperienceItem[] = EXPERIENCE;
}
