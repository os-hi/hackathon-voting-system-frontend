import useFetch from '../../hooks/useFetch';
import EventCard from '../../components/EventCard';
import Tab from './components/Tab';
const Deashboard = () => {
    const url = "https://jacereno.000webhostapp.com/api/events/"
    const {data: event, isLoading, error} = useFetch(url + "1")

    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    return ( 
        <div className='w-full h-full'>
            <Tab />
            {/* <EventCard event={event}/> */}
        </div>
     );
}
 
export default Deashboard;