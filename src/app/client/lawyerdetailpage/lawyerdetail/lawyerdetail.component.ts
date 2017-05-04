import { Component, OnInit, Input } from '@angular/core';
import { Lawyer } from '../../../shared/models/lawyer.model';
import { LawyerInfo } from '../../../shared/models/lawyerInfo.model';

@Component({
  selector: 'app-lawyerdetail',
  templateUrl: './lawyerdetail.component.html',
  styleUrls: ['./lawyerdetail.component.scss']
})
export class LawyerdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() lawyer: Lawyer;
  @Input() lawyerInfo :LawyerInfo; 

}
