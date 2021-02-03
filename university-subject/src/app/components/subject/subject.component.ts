import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  code: number
  subject: string
  teacher: string
  schedule: string
  constructor() { }

  ngOnInit(): void {
  }

}
