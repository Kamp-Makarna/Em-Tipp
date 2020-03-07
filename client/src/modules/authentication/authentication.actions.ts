import { EMTippStoreDispatch } from '../../store/store.types'
import { UserId } from '../../types/user.types'

import { fetchLogin } from './authentication.fetch'
import {
  LoginRequestAction,
  LoginFailureAction,
  LoginSuccessAction
} from './authentication.types'

export const LOGIN_REQUEST = '@authentication/LOGIN_REQUEST'
export const LOGIN_SUCCESS = '@authentication/LOGIN_SUCCESS'
export const LOGIN_FAILURE = '@authentication/LOGIN_FAILURE'

export function login(username: string, password: string) {
  return async (dispatch: EMTippStoreDispatch) => {
    dispatch(loginRequest())
    let response: any
    try {
      response = await fetchLogin(username, password)
    } catch (error) {
      dispatch(loginFailure(error))
      return
    }

    dispatch(loginSuccess(response.id))
  }
}

function loginRequest(): LoginRequestAction {
  return {
    type: LOGIN_REQUEST
  }
}

function loginFailure(error: Error): LoginFailureAction {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

function loginSuccess(userId: UserId): LoginSuccessAction {
  return {
    type: LOGIN_SUCCESS,
    payload: userId
  }
}