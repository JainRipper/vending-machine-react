import { INCREMENT, DECREMENT } from './action';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export function counterReducer(
  state = initialState,
  action: any
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}