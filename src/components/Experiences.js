import React from 'react'
import styles from './Experiences.module.css'

export const Experiences = () => {
    return (
        <div>
           

            <div className={styles.experienceTitle}>
                <h2> <i className={"fas fa-laptop-medical " + styles.icon}></i> Cegedim </h2>
                <span>August 3 - September 14, 2021</span>
            </div>
            <ul>
                <li>
                    In summer of 2021, I attended an internship at Cegedim Egypt in Cairo. Cegedim is one of the biggest tech companies in the health care industry.
                </li>

                <li>
                    Worked in an agile enviroment as a full stack developer.
                </li>

                <li>
                    Learned a lot about the software development life cycle and scrum ceremonies.
                </li>
                <li>
                    Worked with a team to create <a className={styles.link} href="https://github.com/TalaatHarb/cgdm-skills-matrix">Cegedim Skills Matrix</a>, an employee management system.
                </li>
                <li>
                    Technologies used: <span className={styles.brightGreen}>React, Jest, Spring (Boot, Data JPA, Security), Git, and Docker.</span>
                </li>
            </ul>

            <div className={styles.experienceTitle}>
                <h2> <i className={"fas fa-robot " + styles.icon}></i>Deep Learning</h2>
                <span>July 28 - September 18, 2021</span>
            </div>
            <ul>
                <li>
                    In summer of 2021, I enrolled in a college Deep Learning training camp.
                </li>

                <li>
                    Under the guidance of our accomplished professor, we finished Andrew Ng's Deep Learning Specialization on Coursera.
                </li>

                <li>
                    I learned about Deep Neural Networks, CNNs, RNNs, and worked with two of my friends on a kaggle competition to create a segmentation model for identifying COVID-19 symptoms in lung CT scans.
                </li>
            </ul>

            <div className={styles.experienceTitle}>
                <h2> <i className={"fab fa-react " + styles.icon}></i>Front End Development Nanodegree</h2>
                <span>July 2021 - September 2021</span>
            </div>
            <ul>
                <li>
                    Completed the <a className={styles.link} href="https://egfwd.com/">egFWD</a> Web Development Advanced Track.
                </li>

                <li>
                    Studied Javascript ES6, React, Redux, and Webpack.
                </li>

                <li>
                    Created 4 web apps : &nbsp;
                    <a className={styles.link} href="https://github.com/Abdallah-Youssef/MyReads">My Reads</a>,&nbsp;&nbsp;
                    <a className={styles.link} href="https://github.com/Abdallah-Youssef/Would-You-Rather">Would you rather</a>,&nbsp;&nbsp;
                    <a className={styles.link} href="https://github.com/Abdallah-Youssef/TwitterClone">Twitter Clone</a>, and&nbsp;&nbsp;
                    <a className={styles.link} href="https://github.com/Abdallah-Youssef/Sentiment-Analysis-on-Articles-">Sentiment Analysis on Articles</a>.&nbsp;&nbsp;

                </li>
            </ul>
        </div>
    )
}
