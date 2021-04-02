export const SET_USER = 'SET_USER';
import { User } from '../models';

type SetUser = {
  type: typeof SET_USER;
  payload: User;
};

export type AppActionType = SetUser;
