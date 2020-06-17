import React from "react";
import Editor from "./components/Editor";
import Preview from './components/Preview';
import Footer from './components/Footer';
import "./App.css";

class App extends React.Component {

  initialState =`
  This is a paragraph

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3

  [Visit my GitHub](https://github.com/SaranshDawra)
`;

  state = {
    value : this.initialState
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
          <Footer />
      </div>
    );
  }
}

export default App;
