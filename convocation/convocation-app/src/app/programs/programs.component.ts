import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {

  programs = [{
    name: "Bachelor of Health Science (Workplace Health and Wellness)",
    eligibility: true,
    date: "June 2022"
  },
  {
    name: "Early Childhood Education",
    eligibility: true,
    date: "June 2022"
  }
  ]
}
