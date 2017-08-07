import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class Root extends Component {

    render() {
        return (
            <div className="hello">
                Hello Halflife!
                {this.props.children}
            </div>
        );
    }
}
