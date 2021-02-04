import React from "react";

class WelcomeComponent extends React.Component {
  render() {
    return <h1>{this.props.name}Is Awesome,React Works!!!!</h1>;
  }
}
const App = () => {
  return <WelcomeComponent name="Ronald" />;
};
export default App;
