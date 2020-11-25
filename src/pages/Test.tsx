import React from "react";
import { useState } from "react";
import "../styles/pages/Test.css";

interface Text {
  message: string;
}

function CapsLock(message: Text) {
  const textoInserido = message.message;
  const textoEmCapsLock = textoInserido.toUpperCase();
  return <div>{textoEmCapsLock}</div>;
}

function Counter() {
  const [counter, setCounter] = useState(1);

  function addCouter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={addCouter}>Add</button>
    </div>
  );
}

function Test() {
  return (
    <div id="page-test">
      <div className="content-wrapper">
        <CapsLock message="asdfasfadsf"></CapsLock>
      </div>
    </div>
  );
}

export default Test;
