import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


const App = () => {
  let [count, setCount] = useState(0);
  function increment(){
    (count < 9 ? setCount(count + 1) : setCount(count))
  }
  function decrement(){
    (count > 0 ? setCount(count - 1) : setCount(count))
  }
  let myIcons = {
      0 : fa0,
      1 : fa1,
      2 : fa2,
      3 : fa3,
      4 : fa4,
      5 : fa5,
      6 : fa6,
      7 : fa7,
      8 : fa8,
      9 : fa9,
  }
  let [ myIcon, setIcon ] = useState(fa0)
  return (
    <div style={{height: "95vh"}}className="border flex-column d-flex justify-content-center align-items-center">
      <h1> Counter <FontAwesomeIcon icon={myIcon}/> </h1>
      <button className="btn btn-primary me-2" onClick={() => {increment(); (count + 1 < 10 ? setIcon(myIcons[count + 1]) : setIcon(myIcons[count]))}}> Increment </button>
      <button className="btn btn-secondary" onClick={() => {decrement(); ( count - 1 > -1 ? setIcon(myIcons[count - 1]) : setIcon(myIcons[count]))}}> Decrement </button>
    </div>
  );
};

export default App;
