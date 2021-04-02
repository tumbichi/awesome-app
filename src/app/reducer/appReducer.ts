const initialState = {};

type AppState = {};

export const appReducer = (
  state: AppState = initialState,
  { type, payload }: AppActionType
) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
