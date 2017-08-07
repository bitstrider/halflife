import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from 'core/store';

//⚠️ compatible with react-router 2.x to 3.x and react-router-redux 4.x
const history = syncHistoryWithStore(hashHistory, store, {
    adjustUrlOnReplay : false // the URL will not be kept in sync during time travel
})

export default history
