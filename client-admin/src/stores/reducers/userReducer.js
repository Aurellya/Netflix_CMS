import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  REGISTER_SUCCESS,
  REGISTER_LOADING,
} from "../actions/actionType";

const initialState = {
  data: {},
  userLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        userLoading: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case REGISTER_LOADING:
      return {
        ...state,
        userLoading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
