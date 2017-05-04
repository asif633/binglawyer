import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../../../shared/models/lawyer.service';
import { Observable } from 'rxjs/Rx';
import { Lawyer } from '../../../shared/models/lawyer.model';

@Component({
  selector: 'app-lawyerlisting',
  templateUrl: './lawyerlisting.component.html',
  styleUrls: ['./lawyerlisting.component.scss']
})
export class LawyerlistingComponent implements OnInit {

  constructor(private lawyerServ: LawyerService) { }
  
  lawyers: Lawyer[];

  ngOnInit() {
    this.lawyerServ.getLawyers().subscribe(
      res => this.lawyers = res
    );
  }

}
