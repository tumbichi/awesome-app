import { AppActionType, REMOVE_USER, SET_USER } from '../actions';

const initialState = {
  user: null,
};

type AppState = {};

export const appReducer = (
  state: AppState = initialState,
  action: AppActionType
) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
