import React,{ useState } from 'react'
import styles from '../Analytics/Analytics.module.css'
import editIcon from '../../assets/edit_icon.png'
import deleteIcon from '../../assets/delete_icon.png'
import shareIcon from '../../assets/share_icon.png'
import DeleteCardPopUp from '../DeleteCardPopUp/DeleteCardPopUp'

function Analytics() {
    const [showDeletePopUp, setShowDeletePopup] = useState(false)
    const handleShowPopUp = () =>{
        setShowDeletePopup(true);
    }
    const handleClosePopUp = () =>{
        setShowDeletePopup(false);
    }
  return (
    <>
    <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Quiz Analysis</h1>
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableHeading}>
                        <th>S.No</th>
                        <th>Quiz Name</th>
                        <th>Created on</th>
                        <th>Impression</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.quizContents}>
                        <td>1</td>
                        <td>Quiz 1</td>
                        <td>01 Sep, 2023</td>
                        <td>345</td>
                        <td><img src={editIcon} alt=''></img></td>
                        <td><img onClick={handleShowPopUp} src={deleteIcon} alt=''></img></td>
                        <td><img src={shareIcon} alt=''></img></td>
                        <td><a href='#'>Question wise analysis</a></td>
                        <td></td>
                    </tr>
                    <tr className={styles.quizContents}>
                        <td>1</td>
                        <td>Quiz 1</td>
                        <td>01 Sep, 2023</td>
                        <td>345</td>
                        <td><img src={editIcon} alt=''></img></td>
                        <td><img src={deleteIcon} alt=''></img></td>
                        <td><img src={shareIcon} alt=''></img></td>
                        <td><a href='#'>Question wise analysis</a></td>
                        <td></td>
                    </tr>
                    <tr className={styles.quizContents}>
                        <td>1</td>
                        <td>Quiz 1</td>
                        <td>01 Sep, 2023</td>
                        <td>345</td>
                        <td><img src={editIcon} alt=''></img></td>
                        <td><img src={deleteIcon} alt=''></img></td>
                        <td><img src={shareIcon} alt=''></img></td>
                        <td><a href='#'>Question wise analysis</a></td>
                        <td></td>
                    </tr> 
                                
                </tbody>
            </table>
        </div>
    </div>
    {showDeletePopUp && (<DeleteCardPopUp onClose={handleClosePopUp}/>)}
    </>
  )
}

export default Analytics


