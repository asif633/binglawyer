import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/login.service';
import { LawyerService } from '../../shared/models/lawyer.service';
import { Lawyer } from '../../shared/models/lawyer.model';
import { LawyerInfoService } from '../../shared/models/lawyerInfo.service';

@Component({
  selector: 'app-lawyermain',
  templateUrl: './lawyermain.component.html',
  styleUrls: ['./lawyermain.component.scss']
})
export class LawyermainComponent implements OnInit {

  constructor(private logServ: LoginService, private lawyerServ: LawyerService, private lawyerInfoServ: LawyerInfoService) { }

  ngOnInit() {
  }

  login() {
    this.logServ.login({ email: 'farazk174@gmail.com', password: '123456' }).then(auth => console.log(auth.uid));
  }

  logout() {
    this.logServ.logout().then(onfulfil => {
    }
    );
  }

  name: string;
  location: string;
  experience: string;
  description: string;

  addLawyer(){
    let lawyer: Lawyer = {name: this.name, location: this.location, experience: this.experience};
    let lawyerKey = this.lawyerServ.addLawyer(lawyer);
    let lawyerInfo = {description: this.description, lawyerKey: lawyerKey}
    this.lawyerInfoServ.addLawyerInfo(lawyerInfo);
  }

}
