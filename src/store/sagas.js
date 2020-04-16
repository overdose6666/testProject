import { all } from "redux-saga/effects";
// import { headerSagas } from "../common/header/store";
// import { homeSagas } from "../pages/home/store";

export default function* rootSaga() {
    yield all([headerSagas(), homeSagas()]);
}