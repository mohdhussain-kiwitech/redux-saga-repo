import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import jokeSaga from "./jokeSaga";

function* rootSaga() {
  yield all([userSaga(), jokeSaga()]);
}
export default rootSaga;
