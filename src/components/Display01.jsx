import styles from './Display.module.css'

// eslint-disable-next-line react/prop-types
const Display=({disValue})=>{


return(<>
  <input type="text" className={styles.display} value={disValue} readOnly placeholder='00.00'/>
</>)

}
export default Display;