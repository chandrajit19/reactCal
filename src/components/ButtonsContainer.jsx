import styles from "./ButtonsContainer.module.css";



// eslint-disable-next-line react/prop-types
const ButtonContainer=({onButtonClick})=>{
const buttonsName=['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '0', '9','=', '.', '←'];

    return (<>
        <div className={styles.buttonContainer}>
            {
                buttonsName.map(buttonItem => <button onClick={()=> onButtonClick(buttonItem)} key={buttonItem} className={styles.button}>{buttonItem}
                </button> )
            }
        </div>
        </>

        );
  } 
export default ButtonContainer;