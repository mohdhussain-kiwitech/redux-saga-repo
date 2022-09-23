import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  updateNameSuccess,
  updateEmailSuccess,
  updateName,
  updateEmail,
} from "../actionTypes/ActionTypes";
import { USER_API } from "../apis/Api";

const userData = async () => {
  const response = await fetch(USER_API);
  const data = await response.json();
  return data[Math.floor(Math.random() * 10)].name;
};
const userEmail = async () => {
  const response = await fetch(USER_API);
  const data = await response.json();
  return data[Math.floor(Math.random() * 10)].email;
};
// Worker Saga
function* fetchUser() {
  try {
    const userName = yield userData();
    yield put({ type: updateNameSuccess, payload: userName });
  } catch (e) {
    console.warn(e);
  }
}

function* fetchEmail() {
  try {
    // const userEmails = yield userEmail();
    const userEmails = yield call(userEmail);
    yield put({ type: updateEmailSuccess, payload: userEmails });
  } catch (e) {
    console.log(e);
  }
}
// Watcher Saga
function* userSaga() {
  yield takeEvery(updateName, fetchUser);
  yield takeLatest(updateEmail, fetchEmail);
}
export default userSaga;
