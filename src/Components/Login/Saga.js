import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import actions from "./Actions";
import { message } from "antd";
import Cookies from "js-cookie";
//worker saga
function* userLogin(action) {
  console.log("inside the user login saga", action.payload);
  const result = yield call(
    axios.get,
    `https://jsonplaceholder.typicode.com/users?email=${action.payload}`
  );
  if (result.data.length) {
    message.info("User Authenticated");
    Cookies.set("token", action.payload);
    yield put(actions.storeUser(result.data[0]));
  } else {
    message.info("Invalid User");
    Cookies.remove('token');
    yield put(actions.storeUser({}));
  }
}

//watcher saga

export default function* watcherSaga() {
  yield takeEvery(actions.USER_LOGIN, userLogin);
}
