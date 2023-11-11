import EventCard from '../../../components/EventCard';
const ShowEvents = (props) => {
    return ( 
        <div className='w-full h-full'>
            <h1 className='text-3xl font-bold mb-5'>{props.status}</h1>
            {props.user_role === 'organizer' && (
                    <button className='max-w-lg px-10 py-3 bg-purple rounded-lg text-white font-bold mt-10 mb-10 hover:bg-accent'>
                        Create New Event
                    </button>
                )}
            {props.event.map(event => (
                <EventCard event={event} key={event.id} user_role= {props.user_role}/>
            ))}
        </div>
     );
}

export default ShowEvents;
