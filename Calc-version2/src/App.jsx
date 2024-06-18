import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick =  (buttonText) => {
    if(buttonText == 'C'){
      setCalVal("");
    }
    else if(buttonText == '='){
      const res = eval(calVal);
      setCalVal(res);
    }
    else{
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  }
  return (
      <div className= {styles.calculator} >
        <Display displayVal = {calVal}></Display>
        <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
      </div>
  );
}

export default App
