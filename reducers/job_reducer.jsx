import { job_types } from '../actions';

const INITIAL_STATE = {
    results: []
}

export default function(state=INITIAL_STATE, action){
    switch(action.type) {
        case job_types.FETCH_JOBS:
            return action.payload;
        default:
            return state;
    }
}