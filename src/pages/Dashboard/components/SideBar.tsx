import {Link} from 'react-router-dom'
import { Divider } from '@chakra-ui/react';
import { FaTachometerAlt  } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
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
                    <Link className='w-full flex justify-center items-center gap-3' to='/dashboard'>
                        <FaTachometerAlt color='black'/>
                         <span>Dashboard</span>
                    </Link>
                </button>
                <button className="w-full p-3 flex justify-center items-center gap-3" onClick={() => myEventsTab(2)}>
                    <MdEvent/>
                    My Events
                </button>
            </div>
            <div>
                <button className="w-full p-3">
                <Link to='/login'>
                    Logout
                </Link>
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