import ShowEvents from "../../components/ShowEvents";
import useFetch from "../../../../hooks/useFetch";


const MyEventsTab = (props) => {
    const url = "https://oyster-app-wizuy.ondigitalocean.app/api/events/"
    const {data: event, isLoading, error} = useFetch(url + "1")

    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    return ( 
        <div className="w-full h-full flex">
            <ShowEvents 
                event = {event.events} 
                status = "My Events" 
                user_role= {props.user_role} 
                user_id= {props.user_id}/>
        </div>
        
     );
}
 
export default MyEventsTab;