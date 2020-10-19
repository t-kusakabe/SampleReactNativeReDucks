export interface ICountState {
  count: number;
};

interface IAction {
  type: string;
  value: number;
}

const initialState: ICountState = {
  count: 0
};

export const countReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return Object.assign({}, state, {
        count: action.value + 1,
      });
    default:
      return state;
  }
};

export const addCount = (count: number) => {
  return {type: 'ADD_COUNT', value: count};
};
