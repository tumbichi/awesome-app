import { AppActionType, SET_USER } from './types';
import { User } from '../models';

export const setUser = (user: User): AppActionType => ({
  type: SET_USER,
  payload: user,
});
