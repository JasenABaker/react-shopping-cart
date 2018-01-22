import {createStore} from 'redux'
import rootReducer from './reducers/RootReducer'


export default (initialState)=> {
    return createStore(
        rootReducer, 
        initialState,
        window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    )
}