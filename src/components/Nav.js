import React from 'react'
import styles from './Nav.module.css'
export const Nav = () => {
    const handleAnimationsToggled = (e) => {
        if (e.target.checked){
            const canvas = document.getElementById("bg")
            canvas.style.display = "none"

            const main = document.getElementById("main")
            main.style.backgroundColor = "#002008"
        }else {
            const canvas = document.getElementById("bg")
            canvas.style.display = "block"

            const main = document.getElementById("main")
            main.style.backgroundColor = "rgba(105, 105, 105, 0.527)"
        }
    }

    return (
        <div className={styles.nav}>

            <a className={styles.link} href="#about">About</a>


            <a className={styles.link} href="#experiences">Experiences</a>


            <a className={styles.link} href="#contact">Contact</a>

            <div className={styles.animations}>
                <h4 className={styles.animationsHeader}>Animations</h4>
                <label className="switch">
                    <input onChange={handleAnimationsToggled} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>


        </div>
    )
}
