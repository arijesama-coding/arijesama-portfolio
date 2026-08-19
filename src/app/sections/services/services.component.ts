import { Component } from '@angular/core';
import { SERVICES } from '../../data/services.data';
import { ServiceItem } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  items: ServiceItem[] = SERVICES;
}
