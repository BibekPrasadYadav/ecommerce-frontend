import { LOGOUT_SUCCESS,LOGOUT_FAIL } from "../src/constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGOUT_SUCCESS:
            return {
              loading: false,
              user: null,
              isAuthenticated: false,
            };
            default:
                return state;
        }
    }