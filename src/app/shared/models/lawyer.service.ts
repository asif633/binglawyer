import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Lawyer } from './lawyer.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class LawyerService {

    private uid: string;

    constructor(private af: AngularFire) {
        
    }

    addLawyer(cas: Lawyer) {
        this.af.database.list('lawyers').push(cas);
    }

    updateLawyer(cas: Lawyer) {
        this.af.database.list('lawyers').update(cas.$key, { name: cas.name, location: cas.location });
    }

    getLawyers(): Observable<Lawyer[]> {
        return this.af.database.list('lawyers');
    }

    deleteLawyer(cas: Lawyer) {
        this.af.database.list('lawyers').remove(cas.$key);
    }

}