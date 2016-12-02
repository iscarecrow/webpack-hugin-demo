import 'babel-polyfill';
import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';

let mountNode = document.getElementById('content');

class Root extends Component {
  render() {
    return (
      <div>hello world</div>
    )
  }
}

render(<Root/>,mountNode)