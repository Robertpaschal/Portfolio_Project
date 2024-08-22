import React from 'react'
import Dashboard_navbar from '../components/dashboard_navbar';
import Sidebar1 from '../components/sidebar1';
import Dashboard_mini_navbar2 from '../components/dashboard_mini_navbar2';
// import withAuth from '../hooks/dashboardWithAuth';


const Dashboard = () => {
  return (
    <div className='h-full'>
      <Dashboard_navbar />
      <div className='flex'>
        <div className='hidden lg:block'>
          <Sidebar1 />
        </div>
        <Dashboard_mini_navbar2 />

      </div>
    </div>
  )
}

// export default withAuth(Dashboard);
export default Dashboard;