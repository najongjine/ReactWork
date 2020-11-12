import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const YtCrawlContext = createContext();

const YtCrawlProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <YtCrawlContext.Provider value={{ state, dispatch }}>
      {children}
    </YtCrawlContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(YtCrawlContext);
  return dispatch;
};

export const useState = () => {
  const { state } = useContext(YtCrawlContext);
  return state;
};

export default YtCrawlProvider;
