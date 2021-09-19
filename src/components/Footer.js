import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer>
            <a href="https://icons8.com/icon/ONHpSQQCTlFc/computer" className={styles.link}>Computer</a>
             icon by 
             <a href="https://icons8.com" className={styles.link} >Icons8</a>
            <br/>
            other icons by <a href="https://pnghut.com" className={styles.link}>pnghut</a>
            
        </footer>
    )
}
