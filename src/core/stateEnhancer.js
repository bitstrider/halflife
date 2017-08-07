import { compose } from 'redux'
import middlewares from 'core/middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const stateEnhancer = composeEnhancers(
    middlewares,
)

export default stateEnhancer
