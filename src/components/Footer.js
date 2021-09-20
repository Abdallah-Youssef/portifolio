import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer>
            <a href="https://icons8.com/icon/ONHpSQQCTlFc/computer" className={styles.link}>Computer</a> icon by <a href="https://icons8.com" className={styles.link} >Icons8</a>
            <br/>
            other icons by <a href="https://pnghut.com" className={styles.link}>pnghut</a>
            <br/>
            <a href="https://skfb.ly/6sMKI" className={styles.link}>Sentinelle - Matrix</a> by niko300 is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" className={styles.link}>Creative Commons Attribution</a>.
        </footer>
    )
}
