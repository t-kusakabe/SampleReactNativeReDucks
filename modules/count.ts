const initialState = {
  count: 0
};

interface IAction {
  type: string;
  value: number;
}

const reducer = (state = initialState, action: IAction) => {
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
  console.log(count);
  return { type: 'ADD_COUNT', value: count };
};

export default reducer;
