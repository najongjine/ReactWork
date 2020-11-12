import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(LoginContext);
  return dispatch;
};

export const useState = () => {
  const { state } = useContext(LoginContext);
  return state;
};

export default LoginProvider;
