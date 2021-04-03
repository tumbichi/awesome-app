import { RegisterActionType, ON_CHANGE_INPUT } from './registerTypes';

export const onChangeInput = (
  name: string,
  value: unknown
): RegisterActionType => ({
  type: ON_CHANGE_INPUT,
  payload: { name, value },
});
