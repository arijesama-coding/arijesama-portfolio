import { Component } from '@angular/core';
import { STATS } from '../../data/stats.data';
import { StatItem } from '../../shared/models/portfolio.models';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  items: StatItem[] = STATS;

  constructor(public i18n: I18nService) {}
}
