import React from 'react'
import styles from './Nav.module.css'
export const Nav = () => {
    return (
        <div className={styles.nav}>
            
                <a className={styles.link} href="#">About</a>
           
            
                <a className={styles.link} href="#">Work</a>
           
          
                <a className={styles.link} href="#">Contact</a>
           
        </div>
    )
}
