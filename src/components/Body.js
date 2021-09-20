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

            <div className={styles.story} id="about">
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

            <div className={styles.story} id="experiences">
                <div className={styles.darkBackground}>
                    <h1 className={styles.title}> Experiences </h1>

                    <div className={styles.experienceTitle}>
                        <h2> <i className={"fas fa-laptop-medical " + styles.icon}></i> Cegedim </h2>
                        <span>August 3 - September 14, 2021</span>
                    </div>
                    <ul className={styles.lightGreen}>
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
                            Worked with a team to create a web app: <a className={styles.link} href="https://github.com/TalaatHarb/cgdm-skills-matrix">Skills Matrix</a>; An employee managment web app.
                        </li>
                        <li>
                            Technologies used: <span className={styles.brightGreen}>React, Jest, Spring (Boot, Data JPA, Security), Git, and Docker.</span>
                        </li>
                    </ul>

                    <div className={styles.experienceTitle}>
                        <h2> <i className={"fas fa-robot " + styles.icon}></i>Deep Learning</h2>
                        <span>July 28 - September 18, 2021</span>
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
                            Completed the <a className={styles.link} href="https://egfwd.com/">egFWD</a> Web Development Advanced Track.
                        </li>

                        <li>
                            Studied JS es6, React, Redux, and Webpack.
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
            </div>

            <div className={styles.story} id="contact">
                <div className={styles.darkBackground}>
                    <h1 className={styles.title}> Contact </h1>

                    <div className={styles.contactGrid}>
                        <div className={styles.contactIcon}><i className="fas fa-envelope fa-3x"></i></div>
                        <a  href='https://mail.google.com/mail/u/0/?fs=1&to=abdallah.yossf@gmail.com&tf=cm' target="_blank" className={styles.link}>abdallah.yossf@gmail.com</a>

                        <div className={styles.contactIcon}><i className="fab fa-github fa-3x"></i></div>
                        <a href="https://github.com/Abdallah-Youssef" target="_blank" className={styles.link}>Abdallah-Youssef</a>

                        <div className={styles.contactIcon}><i className="fab fa-linkedin fa-3x"></i></div>
                        <a href="https://www.linkedin.com/in/abdallah-youssef-a9ab26194/" target="_blank" className={styles.link}>Abdallah Youssef</a>
                    </div>



                </div>
            </div>







        </div>
    )
}
