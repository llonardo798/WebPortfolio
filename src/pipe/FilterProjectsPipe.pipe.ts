import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project.interfaces';

@Pipe({
  name: 'filterProjects'
})
export class FilterProjectsPipe implements PipeTransform {
  transform(projects: Project[], filteredIds: number[]): Project[] {
    if (!filteredIds || filteredIds.length === 0) {
      return projects;
    }
    return projects.filter(project => filteredIds.includes(project.id));
  }
}