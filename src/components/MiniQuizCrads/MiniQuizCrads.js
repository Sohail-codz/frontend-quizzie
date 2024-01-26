import React from 'react'
import styles from '../MiniQuizCrads/MiniQuizCrads.module.css'
import eyeIcon from '../../assets/eye_icon.png'

function MiniQuizCrads({quizTitle}) {
  return (
    <div className={styles.card}>
        <div className={styles.upper}>
            <h3>Quiz</h3>
            <div className={styles.impressionArea}>
                <h3>600</h3>
                <img src={eyeIcon} alt='eye'></img>
            </div>
        </div>
        <div className={styles.lower}>
            <p style={{color:'green',fontSize:'1vw',marginTop:'10px'}}>Created on : {quizTitle}</p>
        </div>
    </div>
  )
}

export default MiniQuizCrads