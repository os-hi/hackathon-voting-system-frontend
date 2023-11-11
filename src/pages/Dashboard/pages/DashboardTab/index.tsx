import ShowEvents from '../../components/ShowEvents';
import PastEvents from './components/PastEvents';
import UpcomingEvents from './components/UpcomingEvents';

const DashboardTab = (props) => {
    return ( 
            <>
                <ShowEvents event={props.event} status = "Ongoing Events"/>
                <UpcomingEvents />
                <PastEvents />
            </>
     );
}
 
export default DashboardTab;