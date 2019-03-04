import {ACTION_TEST, UPDATE_IDENTITY} from '../actions';

const initialState = {
  data: 'testData',

  identity: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_TEST:
      return {...state, data: action.payload.data};
    case UPDATE_IDENTITY:
      return {...state, identity: action.payload.identity};
    default:
      return state;
  }
}
