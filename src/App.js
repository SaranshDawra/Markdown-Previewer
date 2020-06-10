import React from "react";
import Editor from "./components/Editor";
import Preview from './components/Preview';
import "./App.css";

class App extends React.Component {

  state = {
    value : ''
  }

  updateChangeHandler = (value) => {
    this.setState({value});
  }

  render() {
    return(
      <div className="container text-center">
          <h1 className="title">Markdown Previewer</h1>
          <Editor value={this.state.value} changed={this.updateChangeHandler}></Editor>
          <Preview value={this.state.value}></Preview>
      </div>
    );
  }
}

export default App;
