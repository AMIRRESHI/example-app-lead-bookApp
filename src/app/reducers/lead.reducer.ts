
import { Action } from '@ngrx/store'
import { Lead } from '../models/lead';

 
export const ADD_LEAD = 'ADD_LEAD'
export const REMOVE_LEAD = 'REMOVE_LEAD'

export function leadReducer(state: Lead[] = [], action: Action ){
    switch(action.type){
        case ADD_LEAD:
            return [...state, action.payload]
        case REMOVE_LEAD:
            return [...state, action.payload]
        default:
            return state;    
    }
}
