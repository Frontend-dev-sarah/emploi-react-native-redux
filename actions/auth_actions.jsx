import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Facebook from 'expo-facebook'; 
//AsyncStorage returns a Promise
 

export const auth_types = {
    FACEBOOK_LOGIN_SUCCESS: 'facebook_login_success',
    FACEBOOK_LOGIN_FAIL: 'facebook_login_fail'
};


export const facebookLogin = () => async dispatch => {
        
        await Facebook.initializeAsync(
            {
              autoLogAppEvents: true,
              appId: '347027550350367',
            }
          );

        //async/await to see if token exists
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            //dispatch an action saying FB login is done
            dispatch({type: auth_types.FACEBOOK_LOGIN_SUCCESS, payload: token})
        } else {
            //start up FB login process
            loginFacebook(dispatch)
        }
    
} 
// equal to the upper code action creator
// export const facebookLogin = () => {  
//     return async (dispatch) => {
//         
//     }
// }
const loginFacebook = async (dispatch) => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile']
    });
    if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        alert('Logged in!', `Hi ${(await response.json()).name}!`);
      }
    if (type === 'cancel') {
        alert('failed')
        return dispatch({ type: auth_types.FACEBOOK_LOGIN_FAIL})
    }
    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: auth_types.FACEBOOK_LOGIN_SUCCESS, payload: token})
}

