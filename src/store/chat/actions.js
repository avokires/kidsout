import * as actionTypes from './actionTypes'

export const messageSend = (data) => ({
  data,
  type: actionTypes.MESSAGE_SEND
});

export const messageDelete = (id) => ({
  id,
  type: actionTypes.MESSAGE_DELETE
});

export const messageResend = (id) => ({
  id,
  type: actionTypes.MESSAGE_RESEND
});