/**
 * Created by sergiiivanchenko on 14/07/2017.
 */

import {combineReducers} from 'redux';
import hobbiesReducer from './reducers/HobbyReducer'
import aboutReducer from './reducers/AboutReducer'
import projectReducer from './reducers/ProjectReducer'
import classReducer from './reducers/ClassesReducer'
import quoteReducer from './reducers/QuotesReducer'



// export default combineReducers({
//     todoStore,
//     aboutStore
// })//
//
//
export default combineReducers({
    hobbiesReducer,
    aboutReducer,
    projectReducer,
    classReducer,
    quoteReducer
})






