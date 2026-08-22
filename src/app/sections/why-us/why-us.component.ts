import { Component } from '@angular/core';
import { WHY } from '../../data/why.data';
import { WhyItem } from '../../shared/models/portfolio.models';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-why-us',
  standalone: true,
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  items: WhyItem[] = WHY;

  constructor(public i18n: I18nService) {}
}
