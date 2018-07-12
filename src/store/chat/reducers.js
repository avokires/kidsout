import * as actionTypes from './actionTypes'

export const chatReducer = (state = {
  data: null,
  error: null,
}, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_SEND:
      return Object.assign({}, state, {
        messageList: {
          ...state.messageList,
          [action.data.created_at]: action.data
        }
      });
    case actionTypes.MESSAGE_RESEND:
      return Object.assign({}, state, {
        messageList: {
          ...state.messageList,
          [action.id]: {
            ...state.messageList[action.id],
            isError: false
          }
        }
      });
    case actionTypes.MESSAGE_DELETE:
      return Object.assign({}, state, {
        messageList: Object.keys(state.messageList).reduce((result, key) => {
          if (key !== action.id) {
              result[key] = state.messageList[key];
          }
          return result;
      }, {})
      });
    default:
      return state;
  }
};
