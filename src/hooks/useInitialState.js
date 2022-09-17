import { useState } from 'react';

const initialState = {
  userNickname: '',
  userData: {},
};

const UseInitialState = () => {
  const [state, setState] = useState(initialState);

  const setUserNickname = (userNickname) => {
    setState({
      ...state,
      userNickname,
    });
  };

  const setUserData = (userData) => {
    setState({
      ...state,
      userNickname: userData.login,
      userData,
    });
  };

  return {
    userNickname: state.userNickname,
    userData: state.userData,
    setUserNickname,
    setUserData,
  };
};

export default UseInitialState;
