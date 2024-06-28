import React from "react";

function App() {
  return (
    <div className="App">
      <Son>
        <span>111</span>
      </Son>
    </div>
  );
}

const Son = ({children}) => {
  console.log(children.props.children);
  return (
    <div>
      this is Son
    </div>
  )
}

export default App;
