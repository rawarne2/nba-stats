import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
// import { fetchPlayer } from './actions'


const loggerMiddleware = createLogger()

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
, applyMiddleware(thunkMiddleware, loggerMiddleware))

export default store