import React from 'react'
import styles from './Body.module.css'
export const Body = () => {
    return (
        <div>
            <div className={styles.story}>
                <div className={styles.darkBackground}>
                    <h1> Welcome! I am Abdallah, an aspiring software engineer.</h1>
                    <p className={styles.lightGreen}> The point of this website is to offer a brief introduction to my experience and goals as a software developer.</p>
                </div>
            </div>

            <div className={styles.story}>
                <div className={styles.darkBackground}>
                    <p className={styles.lightGreen}>
                        I am a Computer Engineering student at the University of Alexandria graduating in 2023.
                        <br /><br />
                        My journey with programming started in 2015 when I participated in a school course about competitive programming. I then joined the 2015 EOI and won a bronze medal. Ever since then, I have been interested in anything related to computers.

                        <br /><br />
                        My goal now is to have a fulfilling software engineering career.
                    </p>
                </div>
            </div>

            <div className={styles.story}>
                <div className={styles.darkBackground}>
                    <h1 className={styles.title}> Experiences </h1>

                    <div className={styles.experienceTitle}>
                        <h2> <i className={"fas fa-laptop-medical " + styles.icon}></i> Cegedim </h2>
                        <span>August 3 - September 14, 2021</span>
                    </div>
                    <ul className={styles.lightGreen}>
                        <li> 
                            In summer of 2021, I attended an internship at Cegedim Egypt in Cairo. Cegedim is one of the biggest tech companies in the health care indutry.
                        </li>

                        <li>
                            Worked in an agile enviroment as a full stack developer using mainly React and the Spring Framework.
                        </li>

                        <li>
                            learned a lot about the software development life cycle and scrum ceremonies.
                        </li>
                        <li>
                            Worked with a team to create a web app: <a href="https://github.com/TalaatHarb/cgdm-skills-matrix">Skills Matrix</a>. An app for companies to manage
                            their employees and perform queries on them acorrding to attributes such as: skill, title, and team.
                        </li>
                    </ul>

                    <div className={styles.experienceTitle}>
                        <h2> <i className={"fas fa-robot " + styles.icon}></i>Deep Learning</h2>
                        <span>August 3 - September 14, 2021</span>
                    </div>
                    <ul className={styles.lightGreen}>
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
                    <ul className={styles.lightGreen}>
                        <li> 
                            Completed the <a href="https://egfwd.com/">egFWD</a> Web Development Advanced Track.
                        </li>

                        <li>
                            Studied JS es6, React, Redux, and Webpack.
                        </li>

                        <li>
                            Created 4 web apps : &nbsp;
                            <a href="https://github.com/Abdallah-Youssef/MyReads">My Reads</a>,&nbsp;&nbsp;
                            <a href="https://github.com/Abdallah-Youssef/Would-You-Rather">Would you rather</a>,&nbsp;&nbsp;
                            <a href="https://github.com/Abdallah-Youssef/TwitterClone">Twitter Clone</a>,&nbsp;&nbsp;
                            <a href="https://github.com/Abdallah-Youssef/Sentiment-Analysis-on-Articles-">Sentiment Analysis on Articles</a>.&nbsp;&nbsp;

                        </li>
                    </ul>

                </div>
            </div>


            <div className={styles.story}>
                {/* <div className={styles.darkBackground}>
                    <div className={styles.grid}>

                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}> Skills Matrix </h3>
                            <p className={styles.lightGreen}>

                            </p>
                        </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                        <div className={styles.card}> hello </div>
                    </div>
                </div> */}
            </div>




        </div>
    )
}