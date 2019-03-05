import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Button } from 'element-react';
import 'element-theme-default';
import logo from './logo.svg';
import './App.scss';
import './theme/elementTheme/index.css';
import './config/rem';
import configureStore from './store';
import Part1 from './components/part1';
import Part2 from './components/part2';
import { initApp } from './actions';

const store = configureStore();

store.dispatch(initApp());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App-container">
          <Button type="primary">qqq</Button>
          <Part1></Part1>
          <Part2></Part2>
        </div>
      </Provider>
    );
  }
}

export default App;
