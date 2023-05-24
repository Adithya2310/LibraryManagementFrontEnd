import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userRegisterReducer, userLoginReducer,getAllStudentReducer,userProfileReducer } from "./reducers/UserReducer"
import {addBookReducer,getAllBookReducer} from "./reducers/BookReducer"
import {getAllReturnBookReqReducer,issueRqquestReducer,getAllIssueBookReqReducer,userIssuedBookReducer,singleIssuedBookReducer,allIssuedBookReducer} from "./reducers/IssueReducer"


const rootReducer = combineReducers({
    userRegisterReducer, userLoginReducer,getAllStudentReducer,userProfileReducer,
    addBookReducer,getAllBookReducer,getAllReturnBookReqReducer,
    issueRqquestReducer,getAllIssueBookReqReducer,userIssuedBookReducer,singleIssuedBookReducer,allIssuedBookReducer
})

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    userLoginReducer: { currentUser }
}

const composeEnhancers=composeWithDevTools({})

const store=createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;