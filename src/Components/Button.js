import React from 'react';
import { Button as ButtonMui } from '@material-ui/core';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    return (
      <ButtonMui
        color={this.props.color || 'primary'}
        disabled={this.props.disabled}
        endIcon={this.props.endIcon}
        size={this.props.size}
        startIcon={this.props.startIcon}
        style={this.props.style}
        type={this.props.type}
        variant={this.props.variant || 'contained'}
        onClick={this.props.handleClick}
      >
        {this.props.label}
      </ButtonMui>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.string,
  startIcon: PropTypes.string,
  size: PropTypes.string,
  endIcon: PropTypes.string,
  disabled: PropTypes.string,
  color: PropTypes.string,
  uri: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
