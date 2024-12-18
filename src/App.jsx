import { useState } from 'react';
import styles from './App.module.css';
import ButtonContainer from './components/ButtonsContainer';
import Display from './components/Display01';
function App() {
const [calVal, setCalVal]=useState("");

const onButtonClick=(buttonText)=>{
  
        if(buttonText==="←"){
          setCalVal((prevVal) => prevVal.toString().slice(0, -1));
        }
      
      else if (buttonText==='C'){
          setCalVal("");
        }
        else if(buttonText==="="){
          try{
            const result= eval(calVal);
            setCalVal(result);
          } catch(error){
            setCalVal(`${error.message}`)
          }
      
      }
      
        else{
          const resultValue=calVal+ buttonText;
          setCalVal(resultValue);
        }
}

  return (
     <div className={styles.calculator}>
          <Display disValue={calVal}></Display>
          <ButtonContainer onButtonClick={onButtonClick} ></ButtonContainer>

      </div>
  );
}

export default App
