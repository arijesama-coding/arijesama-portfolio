import { Component } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-showroom',
  standalone: true,
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.scss'
})
export class ShowroomComponent {
  constructor(public i18n: I18nService) {}
}
