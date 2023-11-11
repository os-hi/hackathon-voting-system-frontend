import ShowEvents from '../../components/ShowEvents';
import PastEvents from './components/PastEvents';
const DashboardTab = (props) => {
    return ( 
            <>
                <ShowEvents event={props.event} status = "Ongoing Events"/>
                <PastEvents />
            </>
     );
}
 
export default DashboardTab;