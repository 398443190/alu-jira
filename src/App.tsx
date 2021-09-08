import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {ProjectListScreen} from './screens/project_list'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProjectListScreen />
      </div>
    );
  }
}

export default App;
