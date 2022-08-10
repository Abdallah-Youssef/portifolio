import React from 'react'
import styles from './Experiences.module.css'
import { Link } from './Link'
export const Experiences = () => {
    return (
        <div>
           
            <div className={styles.experienceTitle}>
          <h2> <i className={"fa-brands fa-meta " + styles.icon}></i>Meta</h2>
                <span>July 25 - October 14, 2022</span>
            </div>
            <ul>
                <li>
                    In summer of 2022, I joined Meta London as a software engineering intern.
                </li>
                <li>
                    I worked on testing frameworks and infrastructure.
                </li>
                <li>
                    Programming languages used: <span className="brightGreen">TypeScript, Rust, Hacklang.</span>
                </li>
            </ul>

            <div className={styles.experienceTitle}>
                <h2> <i className={"fas fa-laptop-medical " + styles.icon}></i>Cegedim</h2>
                <span>August 3 - September 14, 2021</span>
            </div>
            <ul>
                <li>
                    In summer of 2021, I attended an internship at Cegedim Egypt in Cairo. Cegedim is one of the leading tech companies in the health care industry.
                </li>

                <li>
                    Worked in an agile enviroment as a full stack developer.
                </li>

                <li>
                    Learned a lot about the software development life cycle and scrum ceremonies.
                </li>
                <li>
                    Technologies used: <span className="brightGreen">React, Jest, Spring (Boot, Data JPA, Security), Git, and Docker.</span>
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
                    Completed the <Link href="https://egfwd.com/">egFWD</Link> Web Development Advanced Track.
                </li>

                <li>
                    Studied Javascript ES6, React, Redux, and Webpack.
                </li>

                <li>
                    Created 4 web apps : &nbsp;
                    <Link href="https://github.com/Abdallah-Youssef/MyReads">My Reads</Link>,&nbsp;&nbsp;
                    <Link href="https://github.com/Abdallah-Youssef/Would-You-Rather">Would you rather</Link>,&nbsp;&nbsp;
                    <Link href="https://github.com/Abdallah-Youssef/TwitterClone">Twitter Clone</Link>, and&nbsp;&nbsp;
                    <Link href="https://github.com/Abdallah-Youssef/Sentiment-Analysis-on-Articles-">Sentiment Analysis on Articles</Link>.&nbsp;&nbsp;

                </li>
            </ul>
        </div>
    )
}
