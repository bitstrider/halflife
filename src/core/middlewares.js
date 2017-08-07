import { applyMiddleware, compose } from 'redux'
import routerMiddleware from 'middlewares/router'
import apiMiddleware from 'middlewares/api'

const middleware = compose(
    applyMiddleware(
        apiMiddleware,
        routerMiddleware,
    )
    //Deprecated: https://github.com/zalmoxisus/redux-devtools-extension/issues/220
    //window.devToolsExtension ? window.devToolsExtension() : devTools => devTools
)

export default middleware
