import React from 'react';
import ViewportManager from './ViewportManager';

/**
 * This is the root class to manage a variety of things for applications utilizing VDS.
 * A user will implement this class as a Wrapper around their application once.
 */
class Manager extends React.Component {

  componentDidMount() {
    ViewportManager.register(this.props);
  }

  componentWillUnmount() {
    ViewportManager.unregister(this.props);
  }

  render() {
    if (!this.props.children) {
      return null;
    }
    return this.props.children;
  }
}

export default Manager;
