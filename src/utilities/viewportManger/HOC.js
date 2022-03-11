import React from 'react';
import ViewportManager from './ViewportManager';
import _isStyledComponent from './isStyledComponent';

const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const wrapWithManager = Component => {
  const componentName = Component
    ? Component.displayName || Component.name
    : 'Component';
  const isStatelessFunctionalComponent =
    typeof Component === 'function' &&
    !(Component.prototype && 'isReactComponent' in Component.prototype);

  // NOTE: We can't pass a ref to a stateless functional component
  const shouldSetInnerRef =
    _isStyledComponent(Component) || isStatelessFunctionalComponent;

  class WithManager extends React.Component {
    constructor(props) {
      super(props);
      this.viewportManager = ViewportManager;
      this.state = { viewport: undefined };
      this.id = this._makeid(10);
      this.viewportManager.subscribe(this.id, vp => {
        this.setState({ viewport: vp });
      });
    }

    static displayName = `WithManager(${componentName})`;
    state = {};

    _makeid(length) {
      var result = '';
      for (var i = 0; i < length; i++) {
        let randomNum = Math.random();
        let flooredNum = Math.floor(randomNum * 10);
        result += CHARACTERS.charAt(flooredNum);
      }
      return result;
    }

    // componentWillMount() {
    //   this.id = this._makeid(10);
    //   this.viewportManager.subscribe(this.id, vp => {
    //     this.setState({ viewport: vp });
    //   });
    // }

    componentDidMount() {
      this.setState({ viewport: this.viewportManager.viewport }); //for intial viewport
    }

    componentWillUnmount() {
      this.viewportManager.unsubscribe(this.id);
    }

    render() {
      const props = {
        viewport: this.state.viewport,
        ...this.props,
      };

      if (!shouldSetInnerRef) {
        props.ref = props.innerRef;
        delete props.innerRef;
      }

      return <Component {...props} />;
    }
  }

  return WithManager;
};

// function makeid(length) {
//   var result = '';
//   var characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

export default wrapWithManager;
