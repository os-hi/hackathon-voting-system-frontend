import useFetch from '../../hooks/useFetch';
import DashboardTab from './pages/DashboardTab';
import MyEventsTab from './pages/MyEventsTab';
import {useState} from 'react';
import SideBar from './components/SideBar';

const Dashboard = () => {
    const url = "https://oyster-app-wizuy.ondigitalocean.app/api/events/1"
    const {data: event, isLoading, error} = useFetch(url)
    const [tab, setTab] = useState(1)


    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    const dashboardTab = () => {
        setTab(1)
    }
    const myEventsTab = () => {
        setTab(2)
    }
    return ( 
        <div className='w-full h-full flex'>
            <SideBar dashboardTab={dashboardTab} myEventsTab={myEventsTab} />
            <div className='w-full h-full relative p-10 flex-col'>
                <div className=" w-full h-full shadow-2xl rounded-lg p-10 flex flex-col">
                    {event && tab === 1 ? <DashboardTab event={event.events}/> : <MyEventsTab user_role='organizer'/>}
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;