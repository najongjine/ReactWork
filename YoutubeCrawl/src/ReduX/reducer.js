import uuid from "uuid/v4";
import { LOGIN } from "./actions";

export const initialState = {
  loginToken: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginToken: action.payload,
      };
    default:
      return;
  }
};

export default reducer;
