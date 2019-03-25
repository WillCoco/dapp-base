import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'element-theme-default';
import logo from './logo.svg';
import './App.scss';
import './theme/elementTheme/index.css';
import './config/rem';
import configureStore from './store';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Introduce from './components/Introduce/Introduce';
import TokenSell from './components/TokenSell/TokenSell';
import Dapp from './components/Dapp/Dapp';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Part1 from './components/part1';
import LanguagePicker from './components/Parts/LanguagePicker/LanguagePicker';
import Link from './components/Link';
import Part2 from './components/part2';
import { initApp } from './actions';

const store = configureStore();

store.dispatch(initApp());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="App-container">
          <Main />
          <Introduce />
          <TokenSell />
          <Dapp />
          <FAQ />
          <Footer />
          {/*<Button type="primary">qqq</Button>*/}
          {/*<Part1></Part1>*/}
          {/*<TimeLeft></TimeLeft>*/}
          {/*<Part2></Part2>*/}
          {/*<Link/>*/}
        </div>
      </Provider>
    );
  }
}

export default App;
