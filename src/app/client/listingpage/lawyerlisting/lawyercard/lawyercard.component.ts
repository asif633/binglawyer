import { Component, OnInit, Input } from '@angular/core';
import { Lawyer } from '../../../../shared/models/lawyer.model';

@Component({
  selector: 'app-lawyercard',
  templateUrl: './lawyercard.component.html',
  styleUrls: ['./lawyercard.component.scss']
})
export class LawyercardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() lawyer: Lawyer; 

}
