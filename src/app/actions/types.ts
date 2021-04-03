import { User } from '../models';

export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

type SetUser = {
  type: typeof SET_USER;
  payload: User;
};

type RemoveUser = {
  type: typeof REMOVE_USER;
};

export type AppActionType = SetUser | RemoveUser;
