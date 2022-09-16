import { createContext } from 'react';
import UseInitialState from '../hooks/useInitialState';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const appState = UseInitialState();

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
