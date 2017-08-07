import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import prepare from 'react-prepare-wrapper'
import {fetchThings} from 'actions/app'
import {selectThings, selectThingById} from 'selectors/app'
import {withRouter} from 'react-router'

import ThingDetails from 'components/ThingDetails'

const mstp = (state, ownProps) => ({
    thing: selectThingById(state,ownProps.match.params.thingId)
})
const onProps = props => {
    const {thing, dispatch} = props
    if(!thing) {
        dispatch(fetchThings())
    }
}

@withRouter
@connect(mstp)
@prepare(onProps)
export default class Thing extends Component {

    render() {
        const {thing} = this.props
        return (
            <div>
                {thing && <ThingDetails thing={thing}/>}
            </div>
        );
    }
}
