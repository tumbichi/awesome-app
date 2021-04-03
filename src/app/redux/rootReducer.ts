import { combineReducers } from 'redux';

import { appReducer } from '../reducer';
import { registerReducer } from '../../features/RegisterLayout/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  register: registerReducer,
});

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;
