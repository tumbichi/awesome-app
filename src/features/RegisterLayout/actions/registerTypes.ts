export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';

type OnChangeInput = {
  type: typeof ON_CHANGE_INPUT;
  payload: { name: string; value: unknown };
};

export type RegisterActionType = OnChangeInput;
