import { RegisterActionType, ON_CHANGE_INPUT } from '../actions';

type RegisterState = {
  form: unknown;
};

const initialState = {
  form: null,
};

export const registerReducer = (
  state: RegisterState = initialState,
  action: RegisterActionType
) => {
  switch (action.type) {
    case ON_CHANGE_INPUT: {
      return {
        ...state,
        form: {
          [action.payload.name]: action.payload.value,
        },
      };
    }
    default: {
      return state;
    }
  }
};
