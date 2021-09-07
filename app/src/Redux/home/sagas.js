import {all, call, put, takeEvery} from 'redux-saga/effects';
import RouteEnd from "../../utils/route";
import * as All from "./constants";

 const checkConectionAPI = () => {
    return fetch(RouteEnd("conect"), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        //body: JSON.stringify(body)
    })
    .then(response => response.json())
        .then(json => {  
         return json[0].conect;
        }).catch((error) => {
            throw error
        })
};

function* checkFlow(action) {
    try {
        const isconect= yield call(checkConectionAPI);
         console.log("response checkConection "+isconect);
    } catch (error) {
        console.log("error "+error);
      //  yield put(loginError(error));
    }
}



function* homeWatcher() {
    yield all([
        takeEvery(All.CHECKCONECTION, checkFlow),
    ])
}

export default homeWatcher;
