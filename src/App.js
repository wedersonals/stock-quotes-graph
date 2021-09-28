import React, { Component } from 'react';
import LineChart from './views/LineChart';

class App extends Component {
  render() {
    return (
		<LineChart period="1000"/>
    );
  }
}

export default App;