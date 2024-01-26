import React from 'react'
import styles from '../DashboardRightSide/DashboardRightSide.module.css'
import MiniQuizCrads from '../MiniQuizCrads/MiniQuizCrads';

function DashboardRightSide() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.quizCreatedArea}>
                <h1 style={{fontSize:'5vw', color:'red'}}>0</h1>
                <h1 className={styles.scoreTitles} style={{color:'red'}}>Quiz Created</h1>
            </div>
            <div className={styles.questionCreatedArea}>
                <h1 style={{fontSize:'5vw', color:'green'}}>0</h1>
                <h1 className={styles.scoreTitles} style={{color:'green'}}>Questions Created</h1>
            </div>
            <div className={styles.totalImpressionArea}>
                <h1 style={{fontSize:'5vw', color:'blue'}}>0</h1>
                <h1 className={styles.scoreTitles} style={{color:'blue'}}>Total Impressions</h1>
            </div>
        </div>
        <div className={styles.trendingTitle}>
            <h1>Trending Quizs</h1>
        </div>
        <div className={styles.miniArea}>
            <MiniQuizCrads quizTitle="Quiz Title 1"/>
            <MiniQuizCrads quizTitle="Quiz Title 1"/><MiniQuizCrads quizTitle="Quiz Title 1"/><MiniQuizCrads quizTitle="Quiz Title 1"/><MiniQuizCrads quizTitle="Quiz Title 1"/><MiniQuizCrads quizTitle="Quiz Title 1"/><MiniQuizCrads quizTitle="Quiz Title 1"/><MiniQuizCrads quizTitle="Quiz Title 1"/><MiniQuizCrads quizTitle="Quiz Title 1"/>
        </div>
    </div>
  )
}

export default DashboardRightSide;