import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from "./lifecycle";

function randomRgba() {
  const o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showComponent: true,
      color: '282c34',
    }
  }

  changeColor = () => {
    this.setState({ color: randomRgba() })
  };

  unmountComponent = () => {
    this.setState({ showComponent: false })
  };

  render() {
    const { showComponent, color } = this.state;
    return (
        <div className="App">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Open console to watch the react life cycle.</p>
              <button onClick={this.changeColor}>Change color</button>
              <div className="content">
               {/*{showComponent && <LifeCycle color={color} changeColor={this.changeColor} unmountComponent={this.unmountComponent} />}/*/}
               {/*{showComponent && <LifeCycle color={color} changeColor={this.changeColor} unmountComponent={this.unmountComponent} />}*/}
               {/*{showComponent && <LifeCycle color={color} changeColor={this.changeColor} unmountComponent={this.unmountComponent} />}*/}
               {showComponent && <LifeCycle color={color} changeColor={this.changeColor} unmountComponent={this.unmountComponent} />}
              </div>
            </header>

          </div>
        </div>
    );
  }
}

export default App;
