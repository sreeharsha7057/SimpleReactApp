import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import SampleForm from './components/SampleForm';

class App extends Component {
  componentDidMount(){
    console.log(this.props.user);
  }
  render() {
    return <SampleForm/>;
  }
}

App.prototypes={
  user: String.isRequired
}

export default App;