import {Link} from 'react-router-dom'
import { Divider } from '@chakra-ui/react';
import PropTypes from "prop-types";
import DbLogo from './DbLogo';

const SideBar = ({dashboardTab, myEventsTab}) => {
    return ( 
        <header className="w-80 h-full pl-8 pt-5 relative box-border">
            <Link to='/dashboard'>
                <DbLogo/>
            </Link>
            <Divider marginTop='1rem'/>
            <div className="flex flex-col mt-3">
                <button className="w-full p-3" onClick={() => dashboardTab(1)}>
                    <Link className='w-full' to='/dashboard'>Dashboard</Link>
                </button>
                <button className="w-full p-3" onClick={() => myEventsTab(2)}>
                    My Events
                </button>
            </div>
            <div>
                <button className="w-full p-3">
                    Log Out
                </button>
            </div>                
        </header>
     );
}
SideBar.propTypes = {
    dashboardTab: PropTypes.func,
    myEventsTab: PropTypes.func,
  };
export default SideBar;