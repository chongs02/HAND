import * as types from "./actionTypes";

export function userLoading() {
  return {
    type: types.USER_LOADING,
    isLoading: true
  };
}

export function userLoaded() {
  return {
    type: types.USER_LOADED,
    isAuthenticated: true,
    isLoading: false,
    user: action.user
  };
}

export function loginSuccessful() {
  localStorage.setItem("token", action.data.token);
  return {
    type: types.LOGIN_SUCCESSFUL,
    isAuthenticated: true,
    isLoading: false,
    errors: null
  };
}

export function autenticationError() {
  return {
    type: types.AUTHENTICATION_ERROR
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED
  };
}

export function logoutSuccessful() {
  localStorage.removeItem("token");
  return {
    type: types.LOGOUT_SUCCESSFUL,
    token: null,
    user: null,
    isAuthenticated: false,
    isLoading: false
  };
}
