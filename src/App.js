import './App.css';
import React, { Component } from 'react'
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    counter: 0,
    isLight: true
  }
  handleDecrement = () => {
    console.log('-1');
    this.setState({ counter: this.state.counter - 1 });
  }
  handleIncrement = () => {
    console.log('+1');
    this.setState({ counter: this.state.counter + 1 });
  }
  modeSwitch = () => {
    this.setState({ isLight: !this.state.isLight });
  }
  render() {
    return (
      <div className="App" style={{
        color: this.state.isLight ? 'black' : 'white',
        backgroundColor: this.state.isLight ? 'white' : 'black'
      }}>
        <div>
          <button id="modeButton" onClick={this.modeSwitch}>{this.state.isLight ? 'Dark mode' : 'Light Mode'}</button>
        </div>
        <div className="pb2">
          <button onClick={this.handleIncrement}>+1</button>
          <span>{this.state.counter}</span>
          <button onClick={this.handleDecrement}>-1</button>
        </div>
        <ListItem />
        <TodoList />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <ListItem />
//       <TodoList />
//     </div>
//   );
// }

// export default App;
