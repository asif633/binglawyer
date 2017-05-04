import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { LawyerInfo } from './lawyerInfo.model';

@Injectable()
export class LawyerInfoService {

    constructor(private af: AngularFire) { }

    lawyerInfos: Observable<LawyerInfo[]>;
    profinfo: LawyerInfo;

    getLawyerInfos(): Observable<LawyerInfo[]> {
        this.lawyerInfos = this.af.database.list("/lawyerInfos");
        return this.lawyerInfos;
    }

    getLawyerInfo(): LawyerInfo {
        return this.profinfo;
    }

    addLawyerInfo(profinfo: LawyerInfo) {
        this.af.database.list('/lawyerInfos').push(profinfo);
    }

    updateLawyerInfo(profinfo: LawyerInfo) {
        this.af.database.list('/lawyerInfos').update(profinfo.$key, {});
    }

    deleteLawyerInfo(profinfo: LawyerInfo) {
        this.af.database.list('/lawyerInfos').remove(profinfo.$key);
    }

}