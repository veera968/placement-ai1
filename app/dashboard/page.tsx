import React from 'react';
import Sidebar from '../components/Sidebar';
import AnalyticsCard from '../components/AnalyticsCard';

const StudentDashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="analytics-cards">
                <AnalyticsCard title="Total Jobs Applied" value="20" />
                <AnalyticsCard title="Interviews Scheduled" value="5" />
                <AnalyticsCard title="Offers Received" value="2" />
            </div>
        </div>
    );
};

export default StudentDashboard;