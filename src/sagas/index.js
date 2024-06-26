import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes"; 
import {createUserSaga} from "./userSaga";

function* rootSaga(){
    yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga)
}

export default rootSaga;