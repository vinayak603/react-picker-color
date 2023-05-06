import React from 'react';
import './style.css';
import {SketchPicker} from "react-color";
import {useState} from "react";

function App(){

  const [currentColor , setCurrentColor] =useState("#fff")
  const hanleOnChange = (color)=>{
    setCurrentColor(color.hex)
  }

  const appStyle = {
    backgroundColor:currentColor,
    height:"100%"
  }
  return(
    <div className="App" style={appStyle}>
      <h1>
      React color Picker
      </h1>
      <SketchPicker className="application"
      color={currentColor}
      onChangeComplete={hanleOnChange}
      />
    </div>
  )
}
export default App;