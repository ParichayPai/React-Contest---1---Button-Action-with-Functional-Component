import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = React.useState("");

  let handleclick = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };

  return (
    <div id="main">
      <button id="click" onClick={handleclick}>
        Button
      </button>
      {para ? <p id="para">{para}</p> : ""}
    </div>
  );
}

export default App;
