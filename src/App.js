import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Myprojects from './components/myprojects';
import Footer from './components/footer';
class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Myprojects/>
        <Footer />
      </div>
    );
  }
}

export default App;

