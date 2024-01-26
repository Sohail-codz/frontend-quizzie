import React, { useState } from 'react';
import styles from '../CreateQuizPopUp/CreateQuizPopUp.module.css';

function CreateQuizPopUp({ onClose }) {
  const [quizType, setQuizType] = useState('');
  const [quizName, setQuizName] = useState('');

  const handleQuizType = (type) => {
    setQuizType(type);
  };

  const handleInputChange = (event) => {
    setQuizName(event.target.value);
  };

  const handleContinue = () => {
    if (quizName.trim() && quizType.trim()) {
      console.log('Quiz Name:', quizName);
      console.log('Quiz Type:', quizType);
      onClose(); 
    } else {
      alert('All the fields are required');
    }
  };

  const handleCancel = () => {
    setQuizType('');
    setQuizName('');
    onClose();
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.popUpContainer}>
        <input
          id='quizName'
          name='quizName'
          type='text'
          placeholder='Quiz Name'
          value={quizName}
          onChange={handleInputChange}
        />
        <div className={styles.typeInputArea}>
          <h3>Quiz Type : </h3>
          <p
            onClick={() => handleQuizType('Q&A')}
            className={quizType === 'Q&A' ? styles.selectedType : ''}
          >
            Q & A
          </p>
          <p
            onClick={() => handleQuizType('POLL')}
            className={quizType === 'POLL' ? styles.selectedType : ''}
          >
            Poll Type
          </p>
        </div>
        <div className={styles.cancelNcontinueArea}>
          <p onClick={handleCancel}>Cancel</p>
          <p onClick={handleContinue}>Continue</p>
        </div>
      </div>
    </div>
  );
}

export default CreateQuizPopUp;