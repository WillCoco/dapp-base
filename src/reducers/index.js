import {ACTION_TEST, UPDATE_IDENTITY, CHANGE_LANGUAGE} from '../actions';
import {UPDATE_REMOTE_TIME, UPDATE_TIME_LEFT} from '../actions/time';
import i18n from '../language';
console.log(i18n.t('token_type'), 123123)

const initialState = {
  i18n,
  language: void (0),
  icoInfo: {
    name: 'Pyramid',
    type: 'EOS Token',
    gross: '10000000',
    icoGross: '4000000',
    symbol: 'PRDT',
    startTime: 1556375700000,
    endTime: 1556975700000,
    exchangeRate: 50,
    minPayments: 10,
    progress: 0.53,
  },
  identity: null,
  timeOffset: 0, // 服务器时间校正
  timeLeft: 0, // 当局剩余时间
  timeTotal: 30 * 24 * 3600 * 1000, // ico周期
  FAQ: [
    {
      question: () => i18n.t('qu1'),
      answer: () => i18n.t('ans1')
    },
    {
      question: () => i18n.t('qu2'),
      answer: () => i18n.t('ans2')
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_TEST:
      return {...state, data: action.payload.data};
    case CHANGE_LANGUAGE:
      return {...state, language: action.payload.language};
    case UPDATE_IDENTITY:
      return {...state, identity: action.payload.identity};
    case UPDATE_REMOTE_TIME:
      return {...state, timeOffset: action.payload.timeOffset};
    case UPDATE_TIME_LEFT:
      return {...state, timeLeft: action.payload.timeLeft};
    default:
      return state;
  }
};
