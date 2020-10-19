import React from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Footer from "./components/Footer";
import classes from "./App.module.css";

class App extends React.Component {
    initialState = `# Welcome to MD-Previewer
MD-Previewer is an online markdown editor built by [Saransh Dawra](https://github.com/SaranshDawra)

## 📄 List

### Number List
1. One
2. Two
3. Three

### Bulletpoint List
* One
* Two
* Three
      
### Dash also works!
- One
- Two
- Three

### Images
<img src="https://media.giphy.com/media/l3HBbltOYjoNq/giphy.gif" height="200px"></img>
      
# 📝 Typography
      
### Headings
      
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
      
### Quotes
> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Donec odio.Quisque volutpat mattis eros.
`;

    state = {
        value: this.initialState,
    };

    updateChangeHandler = (value) => {
        this.setState({ value });
    };

    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.Title}>MD Previewer</div>
                <div className={classes.InnerCont}>
                    <Editor
                        value={this.state.value}
                        changed={this.updateChangeHandler}
                    ></Editor>
                    <Preview value={this.state.value}></Preview>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
