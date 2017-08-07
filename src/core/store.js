import { createStore } from 'redux'
import reducers from 'core/reducers'
// import middleware from './middlewares'
// import { runSaga } from './middlewares/saga'
import stateEnhancer from 'core/stateEnhancer'

const store = createStore(reducers, /* instead middleware => */ stateEnhancer)

// runSaga()

export default store
