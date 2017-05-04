import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lawyer } from '../../shared/models/lawyer.model';
import { LawyerService } from '../../shared/models/lawyer.service';
import { LawyerInfoService } from '../../shared/models/lawyerInfo.service';
import { LawyerInfo } from '../../shared/models/lawyerInfo.model';

@Component({
  selector: 'app-lawyerdetailcontainer',
  templateUrl: './lawyerdetailcontainer.component.html',
  styleUrls: ['./lawyerdetailcontainer.component.scss']
})
export class LawyerdetailcontainerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private lawyerServ: LawyerService, private lawyerInfoServ: LawyerInfoService) { }

  lawyerKey: string;
  lawyer: Lawyer;
  lawyerInfo: LawyerInfo;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.lawyerInfoServ.getLawyerInfos().subscribe(res => this.lawyerInfo = res.filter(res => res.lawyerKey == params['id'])[0]);
      this.lawyerServ.getLawyers().subscribe(res => this.lawyer = res.filter(res => res.$key == params['id'])[0]);
    });
    //this.route.params.subscribe(params => this.lawyerKey = params['id']);
    
  }

  ngOnChange() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.lawyerInfoServ.getLawyerInfos().subscribe(res => this.lawyerInfo = res.filter(res => res.lawyerKey == params['id'])[0]);
      this.lawyerServ.getLawyers().subscribe(res => this.lawyer = res.filter(res => res.$key == params['id'])[0]);
    });
  }

}
