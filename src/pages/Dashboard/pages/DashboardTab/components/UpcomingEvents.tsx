import useFetch from '../../../../../hooks/useFetch';
import EventCard from '../../../../../components/EventCard';
const UpcomingEvents = () => {
    const url = "https://oyster-app-wizuy.ondigitalocean.app/api/events/1"
    const {data: event, isLoading, error} = useFetch(url)


    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    return ( 
            <div className="w-full mt-7">
                <h1 className='text-3xl font-bold mb-5'>Upcoming Events</h1>
                {event &&
                    event.events.map((event) =>
                        event.status === 'upcoming' ? (
                        <EventCard event={event} key={event.id} />
                        ) : (
                        <div className="w-full h-44 border border-dashed border-primary flex items-center justify-center" key={event.id}>
                            <p className='text-2xl font-bold'>No events found</p>
                        </div>
                        )
                    )}
            </div>

     );
}
 
export default UpcomingEvents;