import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux"
import { BASE_URL } from "./page"
export const login=async(dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res=await publicRequest.post(`${BASE_URL}/auth/login`,user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
      const res = await publicRequest.post(`${BASE_URL}/auth/register`, user);
      dispatch(registerSuccess(res.data));
    } catch (error) {
      dispatch(registerFailure());
    }
  };