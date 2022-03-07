import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './job_reducer'
import likedJobs from './likes_reducers';

export default combineReducers({
    auth,
    jobs,
    likedJobs
});