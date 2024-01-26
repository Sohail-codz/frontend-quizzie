import React from 'react'
import styles from '../DeleteCardPopUp/DeleteCardPopUp.module.css'

function DeleteCardPopUp({onClose}) {
    const handleCancel = () => {
        onClose();
      };
  return (
    <div className={styles.mainContainer}>
        <div className={styles.popUpContainer}>
            <h1>Are you confirm you want to delete</h1>
            <div className={styles.cancelNcontinueArea}>
                <p className={styles.confirmButton} style={{backgroundColor:'red', color:'white'}}>Confirm Delete</p>
                <p onClick={handleCancel}className={styles.cancelButton}>Cancel</p>
            </div>
        </div>
    </div>
  )
}

export default DeleteCardPopUp