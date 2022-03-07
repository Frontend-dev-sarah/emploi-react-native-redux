import _ from 'lodash';
import {job_types} from '../actions';

export default function(state = [], action){
    switch(action.type) {
        case job_types.LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ],'jobkey')
        case job_types.CLEAR_LIKED_JOBS: 
            return [];
        default:
            return state;
    }
}
