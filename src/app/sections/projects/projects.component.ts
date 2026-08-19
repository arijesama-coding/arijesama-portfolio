import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { ProjectItem } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  items: ProjectItem[] = PROJECTS;
}
