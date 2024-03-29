import React,{ useState } from 'react'
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar'
import DashboardRightSide from '../../components/DashboardRightSide/DashboardRightSide'
import Analytics from '../../components/Analytics/Analytics'
import styles from '../Dashboard/Dashboard.module.css'

function Dashboard() {
    const [selectedOption, setSelectedOption]=useState('Dashboard');

    const handleOptionChange = (option)=>{
        setSelectedOption(option)
    }

  return (
    <div className={styles.dashboardContainer}>
        <DashboardSidebar onOptionChange={handleOptionChange}/>
        {selectedOption === 'Dashboard' ? (<DashboardRightSide/>) : selectedOption === 'Analytics' ? (<Analytics/>) : <DashboardRightSide/>}
    </div>
  )
}

export default Dashboard

// selectedOption === 'CreateQuiz' ? <CreateQuizPopUp/> :