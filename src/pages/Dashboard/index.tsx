import useFetch from '../../hooks/useFetch';
import DashboardTab from './pages/DashboardTab';
import MyEventsTab from './pages/MyEventsTab';
import {useState, useEffect} from 'react';
import SideBar from './components/SideBar';
import axios from 'axios'

const Dashboard = () => {
    const url = "https://oyster-app-wizuy.ondigitalocean.app/api/events/1"
    const {data: event, isLoading, error} = useFetch(url)
    const [userData, setUserData] = useState(null);
    const [tab, setTab] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              'https://oyster-app-wizuy.ondigitalocean.app/api/auth/user-profile',
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
              }
            );
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors
          }
        };
    
        fetchData(); // Call your function when the component mounts
      }, []);

    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    const dashboardTab = () => {
        setTab(1)
    }
    const myEventsTab = () => {
        setTab(2)
    }
    return ( 
        <div className='w-full h-full flex relative'>
            <SideBar dashboardTab={dashboardTab} myEventsTab={myEventsTab} />
            <div className='w-full h-full relative p-20 flex-col'>
                <div className=" w-11/12 h-auto absolute shadow-2xl rounded-lg p-10 flex flex-col">
                    {event && tab === 1 && <DashboardTab event={event.events}/> }
                    {event && tab === 2 && <MyEventsTab user_role={userData && userData.roles} user_id={userData && userData.id}/> }
                    {/* // : <MyEventsTab user_role='organizer'/>} */}
                </div>
            </div>
        </div>
     );
}

export default Dashboard;

