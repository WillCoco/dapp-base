import {ACTION_TEST, UPDATE_IDENTITY} from '../actions';
import {UPDATE_REMOTE_TIME, UPDATE_TIME_LEFT} from '../actions/time';

const initialState = {
  roundInfo: {
    startTime: 1551763700000,
  },
  identity: null,
  timeOffset: 0, // 服务器时间校正
  timeLeft: 0, // 当局剩余时间
  timeTotal: 24 * 3600 * 1000, // 一局最大时间
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_TEST:
      return {...state, data: action.payload.data};
    case UPDATE_IDENTITY:
      return {...state, identity: action.payload.identity};
    case UPDATE_REMOTE_TIME:
      return {...state, timeOffset: action.payload.timeOffset};
    case UPDATE_TIME_LEFT:
      return {...state, timeLeft: action.payload.timeLeft};
    default:
      return state;
  }
}
