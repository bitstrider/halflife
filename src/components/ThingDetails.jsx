import React, { Component } from 'react';

const ThingDetails = props => {
    const {thing} = props
    return (
        <div {...props}>
            <h3>Thing : {thing.name}</h3>
            <br/>{thing.desc}
        </div>
    )
}

export default ThingDetails
