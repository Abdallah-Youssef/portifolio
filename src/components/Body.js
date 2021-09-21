import React from 'react'
import styles from './Body.module.css'
import { Experiences } from './Experiences'
export const Body = () => {
    return (
        <div>
            <div className={styles.story}>
                <div className={styles.darkBackground}>

                    <div className={styles.pixelFont}>
                        Welcome! I am Abdallah, <br />
                        an aspiring software engineer.
                    </div>

                    <div></div>
                    <p> The point of this website is to offer a brief introduction to my experience and goals as a software developer.</p>
                </div>
            </div>

            <div className={styles.story} id="about">
                <div className={styles.darkBackground}>
                    <p>
                        I am a Computer Engineering student at the University of Alexandria graduating in 2023.
                        <br /><br />
                        My journey with programming started in 2015 when I participated in a school course about competitive programming. I then joined the 2015 EOI and won a bronze medal. Ever since then, I have been interested in anything related to computers.

                        <br /><br />
                        My goal now is to have a fulfilling software engineering career.
                    </p>
                </div>
            </div>

            <div className={styles.story} id="experiences">
                <div className={styles.darkBackground}>
                    <h1 className={styles.storyTitle}> Experiences </h1>
                    <Experiences />
                </div>
            </div>

            <div className={styles.story} id="contact">
                <div className={styles.darkBackground}>
                    <h1 className={styles.storyTitle}> Contact </h1>

                    <div className={styles.contactGrid}>
                        <div className={styles.contactIcon}><i className="fas fa-envelope fa-3x"></i></div>
                        <a rel="noreferrer" href='https://mail.google.com/mail/u/0/?fs=1&to=abdallah.yossf@gmail.com&tf=cm' target="_blank" className={styles.link}>abdallah.yossf@gmail.com</a>

                        <div className={styles.contactIcon}><i className="fab fa-github fa-3x"></i></div>
                        <a rel="noreferrer" href="https://github.com/Abdallah-Youssef" target="_blank" className={styles.link}>Abdallah-Youssef</a>

                        <div className={styles.contactIcon}><i className="fab fa-linkedin fa-3x"></i></div>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/abdallah-youssef-a9ab26194/" target="_blank" className={styles.link}>Abdallah Youssef</a>
                    </div>



                </div>
            </div>







        </div>
    )
}
