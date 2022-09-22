import {takeEvery, put } from "redux-saga/effects";

const joke = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comment = await res.json();
  return comment[Math.floor(Math.random() * 10)].body;
};

function* fetchJoke() {
  try {
    const comment = yield joke();
    yield put({ type: "UPDATE_COMMENT_SUCCESS", payload: comment });
  } catch (e) {
    console.warn(e);
  }
}

function* jokeSaga() {
  yield takeEvery("UPDATE_JOKE", fetchJoke);
}

export default jokeSaga;
