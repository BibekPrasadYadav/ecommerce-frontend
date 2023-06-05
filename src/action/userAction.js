import { LOGOUT_SUCCESS,LOGOUT_FAIL } from "../constants/userConstants";
import axios from "axios";

export const logout = () => async (dispatch) => {
    try {
      await axios.get(`/api/users/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };