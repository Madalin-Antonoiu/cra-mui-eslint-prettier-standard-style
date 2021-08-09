import React from 'react';
import './On.css';

class ToggleButton extends React.Component {
  state = {
    isToggleOn: true,
  };

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick} className="button">
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default ToggleButton;
