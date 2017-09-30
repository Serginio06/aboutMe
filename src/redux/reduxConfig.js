/**
 * Created by sergiiivanchenko on 14/07/2017.
 */

import {combineReducers} from 'redux';
import hobbiesReducer from './reducers/HobbyReducer'
import aboutReducer from './reducers/AboutReducer'



// export default combineReducers({
//     todoStore,
//     aboutStore
// })//
//
//
export default combineReducers({
    hobbiesReducer,
    aboutReducer
})






