import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

export const job_types = {
    FETCH_JOBS: 'fetch_jobs',
    LIKE_JOB: 'like_job',
    CLEAR_LIKED_JOBS: 'clear_liked_jobs'
};

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'

const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
}

const buildJobUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip});
    return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region, callback) => {
    return async(dispatch) => {
        try {
            let zip = await reverseGeocode(region);
            const url = buildJobUrl(zip);
            let {data} = await axios.get(url);
            dispatch({type: job_types.FETCH_JOBS, payload: data})
            callback();
        } catch (error) {
            console.log(error);
            callback();
        }
    
    }
}

export const clearLikedJobs = () => {
    return {type: job_types.CLEAR_LIKED_JOBS}
}

export const likejob = (job) => {
    return {
        type: job_types.LIKE_JOB,
        payload: job
    }
}