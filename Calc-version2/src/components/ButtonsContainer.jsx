import styles from "./ButtonsContainer.module.css"
const ButtonsContainer = ({onButtonClick}) => {
    const buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return <div className= {styles.buttonsContainer}>
      {
        buttonName.map(button => <button className={styles.button} onClick={() => onButtonClick(button)}>{button}</button>)
      }
  </div>
};
export default ButtonsContainer;