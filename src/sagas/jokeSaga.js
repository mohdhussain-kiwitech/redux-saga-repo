import { takeEvery, put } from "redux-saga/effects";
import { updateJoke, updateCommentSuccess } from "../actionTypes/ActionTypes";
import { COMMENT_API } from "../apis/Api";

const joke = async () => {
  const res = await fetch(COMMENT_API);
  const comment = await res.json();
  return comment[Math.floor(Math.random() * 10)].body;
};

function* fetchJoke() {
  try {
    const comment = yield joke();
    yield put({ type: updateCommentSuccess, payload: comment });
  } catch (e) {
    console.warn(e);
  }
}
function* jokeSaga() {
  yield takeEvery(updateJoke, fetchJoke);
}

export default jokeSaga;
