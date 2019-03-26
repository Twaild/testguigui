import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <button>{this.props.text}</button>
        );
    }
}
Button.propTypes = {};

export default Button;