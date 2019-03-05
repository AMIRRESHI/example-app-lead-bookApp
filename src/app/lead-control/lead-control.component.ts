import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lead } from '../models/lead';
import { AppState } from '../models/app.state';


@Component({
    selector: 'app-lead-control',
    templateUrl: './lead-control.component.html'
  })
  export class LeadControlComponent {
    lead = {} as Lead;

    constructor(private store: Store<AppState>){
        console.log('inside LeadControlComponent')
    }

    addLead() {
        //this.store.dispatch()
    }
  }