import { Component } from '@angular/core';
import { WHY } from '../../data/why.data';
import { WhyItem } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-why-us',
  standalone: true,
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  items: WhyItem[] = WHY;
}
