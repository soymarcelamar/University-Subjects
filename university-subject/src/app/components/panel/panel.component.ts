import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../services/subject.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  title = 'university-subject';
  columnDefs = [
    { field: 'code', sortable: true, filter: true },
    { field: 'subject', sortable: true, filter: true },
    { field: 'teacher', sortable: true, filter: true },
    { field: 'schedule', sortable: true, filter: true}
];

rowData = [
    { code: '0331', subject: 'Introducción al Derecho', teacher: 'Mayra Cifuentes', schedule: 'Lunes y viernes: 7:00AM-9:00AM'  },
    { code: '0332', subject: 'Filosofía del Derecho', teacher: 'Esteban Rodríguez', schedule: 'Martes y jueves: 9:00AM-11:00AM'},
    { code: '0333', subject: 'Derecho constitucional I', teacher: 'Luis Forero', schedule: 'Martes y jueves: 7:00AM-9:00AM'}
];
  constructor(private minionsService: SubjectService) { }

  ngOnInit(): void {
  }

}
