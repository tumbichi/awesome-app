import { AppActionType, REMOVE_USER, SET_USER } from './types';
import { User } from '../models';

export const setUser = (user: User): AppActionType => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = (): AppActionType => ({
  type: REMOVE_USER,
});
