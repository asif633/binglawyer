import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Lawyer } from './lawyer.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class LawyerService {

    private uid: string;

    constructor(private af: AngularFire) {
        this.af.auth.subscribe(auth => {
            if (auth != undefined && auth != null)
                this.uid = auth.uid;
        }
        );
    }

    addLawyer(cas: Lawyer) {
        let k = this.af.database.list('lawyers').$ref.ref.push().key;
        console.log(k);
        this.af.database.list('lawyers').$ref.ref.child(k).set(cas);
        console.log(this.uid);
        let ref = this.af.database.list('userLawyers').$ref.ref.child(this.uid).child(k).set(true);
        //ref.ref.child(k).set(true);
        //ref.set(k);
        return k;
    }

    updateLawyer(cas: Lawyer) {
        //this.af.database.list('Lawyers').update(cas.$key, {LawyerName: cas.LawyerName, LawyerNo: cas.LawyerNo});
    }

    getLawyers(): Observable<Lawyer[]> {
        return this.af.database.list('lawyers');
    }

    getLawyer(key: string) {
        return this.af.database.list('/lawyers', {
            query: {
                orderByChild: '$key',
                equalTo: key
            }
        });
    }

    getLawyersOfUser(): Lawyer[] {
        let Lawyers: Lawyer[] = [];
        if (this.uid != undefined || this.uid != null) {
            this.af.database.list('userLawyers/' + this.uid)
                .forEach(res => res.forEach(
                    res => {
                        console.log(res.$key);
                        this.af.database.object(`lawyers/` + res.$key).subscribe(res => {
                            console.log(res);
                            Lawyers.push(res);
                        })
                    }
                ));
        }
        return Lawyers;
    }

    getUserLawyers(): Observable<Lawyer[]> {
        if (this.uid != undefined || this.uid != null) {
            return this.af.database.list('userLawyers/' + this.uid)
                .map(res => res.map(res => res.$key))
                .map(lspc => lspc.map(lessonKey => this.af.database.object('lawyers/' + lessonKey)))
                .mergeMap(fbojs => Observable.combineLatest(fbojs))
        }
    }

    deleteLawyer(cas: Lawyer) {
        this.af.database.list('lawyers').remove(cas.$key);
    }
}