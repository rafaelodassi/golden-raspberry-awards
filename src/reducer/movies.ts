interface MoviesState {
  yearsMultipleWinner: {};
}

export enum ActionType {
  Add = 'ADD',
}

interface MoviesAction {
  type: ActionType;
  payload: any;
}

export const initialState = {
  yearsMultipleWinner: [],
};

export const reducer = (state: MoviesState, action: MoviesAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.Add:
      return { ...state, yearsMultipleWinner: payload };
    default:
      return state;
  }
};
