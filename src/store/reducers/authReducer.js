import {getAuthUser} from "../../services/auth";
const initialState = {
    ud: getAuthUser()
};

const authReducer = (state=initialState, action) => {
   switch (action.type) {
    case "SET_USER_DETAIL":
        return {
            ...state,
            ud: action.payload
        }
    default:
      return state;
   }
}

export default authReducer;