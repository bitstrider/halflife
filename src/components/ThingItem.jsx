import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const ThingItem = props => {
    const {thing} = props
    return (
        <div {...props}>
            - <Link to={`/things/${thing.id}`}>{thing.name}</Link>
        </div>
    )
}

export default ThingItem
