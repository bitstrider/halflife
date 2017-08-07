import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {selectThings} from 'selectors/app'

let About = props => (
  <div>
    <h2>About</h2>
    <div>This container shows the 'state' of 'things'</div>
    <pre>things: {JSON.stringify(props.things,null,2)}</pre>
  </div>
)

const mstp = state => ({things:selectThings(state)})

About = connect(mstp)(About)

export default About
