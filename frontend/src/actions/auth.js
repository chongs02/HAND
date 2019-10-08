export const loadUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: "USER_LOADING" });

    const token = getState().auth.token;

    let headers = {
      "Content-Type": "application/json"
    };

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }
    return fetch("/api/auth/user/", { headers })
      .then(response => {
        if (response.status < 500) {
          return response.json().then(data => {
            return { status: response.status, data };
          });
        } else {
          console.log("SEVER ERROR");
          throw response;
        }
      })
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: "USER_LOADING", user: response.data });
          return response.data;
        } else if (response.status >= 400 && response.status < 500) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: response.data });
          throw response.data;
        }
      });
  };
};

export const login = (username, password) => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application.json" };
    let body = JSON.stringify({ username, password });

    return fetch("/api/auth/login/", { headers, body, method: "POST" })
      .then(response => {
        if (response.status < 500) {
          return response.json().then(data => {
            return { status: response.status, data };
          });
        } else {
          console.log("SERVER ERROR");
          throw response;
        }
      })
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: "LOGIN_SUCCESSFUL", data: response.data });
          return response.data;
        } else if (response.status === 403 || response.status === 401) {
          dispatch({ type: "AUTHUENTICATON_ERROR", data: response.data });
          throw response.data;
        } else {
          dispatch({ type: "LOGIN_FAILED", data: response.data });
          throw response.data;
        }
      });
  };
};

export const register = (username, password) => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({ username, password });

    return fetch("/api/auth/register/", { headers, body, method: "POST" })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "REGISTRATION_SUCCESSFUL", data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        } else {
          dispatch({ type: "REGISTRATION_FAILED", data: res.data });
          throw res.data;
        }
      });
  };
};
