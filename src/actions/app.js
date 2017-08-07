import { API, API_THINGS, API_ARTICLES } from 'constants/api'
import {
    FETCH_THINGS_SUCCEEDED,
    FETCH_ARTICLES_SUCCEEDED
} from 'constants/app'

export const fetchThings = () => ({
    type: API,
    payload: {
        url:`${API_THINGS}`,
        success:fetchThingsSucceeded,
    }
})


export const fetchThingsSucceeded = data => ({
    type: FETCH_THINGS_SUCCEEDED,
    payload: { data }
})

export const fetchArticles = id => ({
    type: API,
    payload: {
        url:`${API_ARTICLES}/${id}`,
        success:fetchArticlesSucceeded(id),
    }
})

export const fetchArticlesSucceeded = id => data => ({
    type: FETCH_ARTICLES_SUCCEEDED,
    payload: { id, data }
})
