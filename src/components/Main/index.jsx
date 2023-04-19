import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CurrentLocalPath from '../CurrentLocalPath';
import styles from "./style.module.css"


export default function Main() {

  return ( <div className={styles.main}>
    <CurrentLocalPath />
    <main>
      main view
    </main>
  </div>
  )
}
