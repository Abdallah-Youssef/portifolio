import React from 'react'
import { LinkWithIcon } from './LinkWithIcon'
import styles from './WorkGrid.module.css'

export const WorkGrid = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <LinkWithIcon href="https://github.com/TalaatHarb/cgdm-skills-matrix">Cegedim Skills Matrix</LinkWithIcon>
                </h2>
                <ul>
                    <li>
                        Employee management system created with React and Spring.
                    </li>
                    <li>
                        Technologies/Libraries used:  <span className="brightGreen">Material UI, Redux, JWTs, Spring Security, Spring Data JPA, H2 embedded database, SQL, JPQL, Three Tier Architecture.</span>
                    </li>
                </ul>
            </div>

            <div className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <LinkWithIcon href="https://github.com/Abdallah-Youssef/Would-You-Rather">Would You Rather</LinkWithIcon>
                    
                    </h2>
                <ul>
                    <li>
                        Social Media Platform, where users can post polls and answer other users' polls.
                    </li>
                    <li>
                        Topics: <span className="brightGreen">React, Redux, Routing.</span>
                    </li>
                </ul>
            </div>

            <div className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <LinkWithIcon href="https://github.com/Abdallah-Youssef/Language-Parser-with-JavaCC">JavaCC Language Parser</LinkWithIcon>
                </h2>
                <ul>
                    <li>
                        Parser for a simple programming language created using JavaCC.
                    </li>
                    <li>
                        Topics: <span className="brightGreen">Compilers, Abstract Syntax Trees, and JUnit.</span>
                    </li>
                    
                </ul>
            </div>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <LinkWithIcon href="https://github.com/Abdallah-Youssef/MyReads">My Reads</LinkWithIcon>
                </h2>
                <ul>
                    <li>
                        Library web app created with React.
                    </li>
                    <li>
                        Topics: <span className="brightGreen">Controlled React Components and React Routing.</span>
                    </li>
                </ul>
            </div>

            <div className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <LinkWithIcon href="https://github.com/Abdallah-Youssef/Sentiment-Analysis-on-Articles-">Sentiment Analysis on Articles</LinkWithIcon>
                </h2>
                <ul>
                    <li>
                        Website that performs sentiment analysis using the <a href="https://www.meaningcloud.com/" target="blank" rel="noreferrer">Meaning Cloud</a> API.
                    </li>
                    <li>
                        Topics: <span className="brightGreen"> NodeJs, ExpressJs, Jest, Webpack, and Service Workers.</span>
                    </li>
                </ul>
            </div>

            <div className={styles.card}>
                <h2 className={styles.cardTitle}>
                    <LinkWithIcon href="https://github.com/Abdallah-Youssef/Movies">Movies App</LinkWithIcon>
                </h2>

                <ul>
                    <li>
                        IMDB movie database browser. 
                    </li>
                    <li>
                        Topics: <span className="brightGreen">Material UI, REST APIs, and local storage.</span>
                    </li>
                </ul>
            </div>


            {/* TODO : Add product consumer , mail server, twitter clone */}
            
        </div>
    )
}
