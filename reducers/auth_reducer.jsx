import { auth_types } from '../actions';

const auth_reducer = (state = {}, action) => {
    switch (action.type) {
        case auth_types.FACEBOOK_LOGIN_SUCCESS:
            return { token: action.payload }
        case auth_types.FACEBOOK_LOGIN_FAIL:
            return { token: null }
        default:
            return state;
    }
}

export default auth_reducer; 