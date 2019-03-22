import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/invoicesReducer'
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunkMiddleware,
            logger,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
)

export default store