import {ACTION_TEST, UPDATE_IDENTITY, CHANGE_LANGUAGE} from '../actions';
import i18n from '../language';

const initialState = {
  i18n,
  language: void (0),
  data: 'testData',
  identity: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_TEST:
      return {...state, data: action.payload.data};
    case CHANGE_LANGUAGE:
      return {...state, language: action.payload.language};
    case UPDATE_IDENTITY:
      return {...state, identity: action.payload.identity};
    default:
      return state;
  }
}
