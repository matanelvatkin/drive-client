import React from 'react'
import Heder from '../components/Heder'
import Main from '../components/Main'
import styles from "./style.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
        <Heder/>
        <main><Main/></main>
    </div>
  )
}
