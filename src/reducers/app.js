import _keyBy from 'lodash/keyBy'
import {
    FETCH_THINGS_SUCCEEDED,
    FETCH_ARTICLES_SUCCEEDED
} from 'constants/app'

const defaultState = {
    things:{
        byIds:{},
        allIds:[],
    },
    articles:[]
}

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_THINGS_SUCCEEDED: {
            const { data } = payload
            const byIds = _keyBy(data,'id');
            return {...state, things: { byIds, allIds:Object.keys(byIds) } }
        }

        case FETCH_ARTICLES_SUCCEEDED: {
            const { id, data } = payload
            return {...state, articles: data }
        }

        default: {
            return state
        }

    }
}
