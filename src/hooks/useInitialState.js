import { useState } from 'react';

const initialState = {
  userNickname: '',
  userData: {},
};

const UseInitialState = () => {
  const [state, setState] = useState(initialState);

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
    setUserData,
  };
};

export default UseInitialState;
