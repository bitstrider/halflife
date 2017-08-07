import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import prepare from 'react-prepare-wrapper'
import {fetchThings} from 'actions/app'
import {selectThings} from 'selectors/app'
import {Link, withRouter} from 'react-router-dom'

import ThingItem from 'components/ThingItem'

const mstp = state => ({
    things: selectThings(state)
})
const onProps = props => {
    const {things, dispatch} = props
    if(Object.keys(things.byIds).length == 0) {
        dispatch(fetchThings())
    }
}

@withRouter
@connect(mstp)
@prepare(onProps)
export default class Things extends Component {

    render() {
        const {things} = this.props
        return (
            <div className="things">
                <h2>Things</h2>
                {things && Object.values(things.byIds).map((thing,index) =>
                    <ThingItem thing={thing} key={index}/>
                )}
            </div>
        );
    }
}
