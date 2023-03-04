import logo from './logo.svg';
import { Component } from "react";
//import React from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// you can use class App extends React.Component (but for that import React from "react";)
class App extends Component {
   test = "23456543";
  // where state varialbles are initialized
  constructor() {
    super();
    console.log(this.props);
    this.state = {
      color: "red",
      fname: "Azhar",
      lname: "Shaikh",
    };
    console.log("Construnctor Method", this.state, this.test);
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromprops called");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("Unmoutiing ");
  }
  componentDidMount() {
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({ ...this.state, color: "yellow" });
    }, 15000);
  }
  render() {
    console.log("Render Called");
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.color}  
           Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
