import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import Cookies from 'js-cookie';

import {
  LOAD_PROF,
  LOGIN_FAIL,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../action-types";

export const login = () => async (dispatch) => {
  try {
    if (!auth) {
      throw new Error(
        "Firebase login is not configured. Add the Firebase environment variables and restart the app."
      );
    }

    dispatch({
      type: LOGIN_REQ,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    
    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential?.accessToken;

    if (!accessToken || !res.additionalUserInfo?.profile) {
      throw new Error("Google login did not return a valid user profile.");
    }

    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
      userId: res.additionalUserInfo.profile.id,
    };
    

    Cookies.set('sign-language-ai-access-token', accessToken, { expires: 2 });
    Cookies.set('sign-language-ai-user', JSON.stringify(profile) , { expires: 2 })

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROF,
      payload: profile,
    });

    return { success: true };
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });

    return { success: false, error: error.message };
  }
};


export const logout = () => async dispatch =>{

    if (auth) {
      await auth.signOut()
    }

    dispatch({
        type: LOGOUT
    }) 

    Cookies.remove('sign-language-ai-access-token');
    Cookies.remove('sign-language-ai-user');
}
