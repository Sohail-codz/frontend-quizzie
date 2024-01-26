import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../DashboardSidebar/DashboardSidebar.module.css';
import CreateQuizPopUp from '../CreateQuizPopUp/CreateQuizPopUp';

function DashboardSidebar({ onOptionChange }) {
    const navigate = useNavigate();
    const [showCreateQuizPopUp, setShowCreateQuizPopUp] = useState(false);
    // const [selected,setSelected]= useState('');

    const authToken = localStorage.getItem('jwtToken');

    const handleLogout = ()=>{
        localStorage.removeItem('jwtToken');
        navigate('/');
    };

    const handleOptionClick = (option) => {
        onOptionChange(option);
    };
 
    const handleClosePopUp = () =>{
        setShowCreateQuizPopUp(false);
    }

  return (
    <>
    <div className={styles.sidebar}>
        <h1 className={styles.header}>QUIZZIE</h1>
        <div className={styles.options}>
            <h2 onClick={() => handleOptionClick('Dashboard')}>Dashboard</h2>
            <h2 onClick={() => handleOptionClick('Analytics')}>Analytics</h2>
            <h2 onClick={() => setShowCreateQuizPopUp(true)}>Create Quiz</h2>
        </div>
        <h2 className={styles.footer} onClick={authToken ? handleLogout : () => navigate('/')}>
        {authToken ? 'LOGOUT' : 'LOGIN'}
        </h2>
    </div>
    {showCreateQuizPopUp && (
        <CreateQuizPopUp onClose={handleClosePopUp} />
      )}
    </>
  )
}

export default DashboardSidebar;