import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const userData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data[Math.floor(Math.random() * 10)].name;
};
const userEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data[Math.floor(Math.random() * 10)].email;
};
// Worker Saga

function* fetchUser() {
  try {
    const userName = yield userData();
    yield put({ type: "UPDATE_NAME_SUCCESS", payload: userName });
  } catch (e) {
    console.warn(e);
  }
}

function* fetchEmail() {
  try {
    // const userEmails = yield userEmail();
    const userEmails = yield call(userEmail);
    yield put({ type: "UPDATE_EMAIL_SUCCESS", payload: userEmails });
  } catch (e) {
    console.log(e);
  }
}

// Watcher Saga

function* userSaga() {
  yield takeEvery("UPDATE_NAME", fetchUser);
  yield takeLatest("UPDATE_EMAIL", fetchEmail);
}

export default userSaga;
