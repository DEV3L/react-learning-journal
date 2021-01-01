import React, { Component } from 'react';

import brainBitLogo from '../../static/brain_bit_brain.png';

import './BrandLogo.css';

class BrandLogo extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <img src={brainBitLogo} id="brand-logo" alt="brand icon" />
      </div>
    );
  }
}

export default BrandLogo;
