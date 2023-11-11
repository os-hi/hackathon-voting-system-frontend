import {Link} from 'react-router-dom'
import { Divider } from '@chakra-ui/react';
import Logo from '../../../components/Logo';
import PropTypes from "prop-types";

const SideBar = ({dashboardTab, myEventsTab}) => {
    return ( 
        <header className="w-80 h-full pl-8 pt-5 relative box-border">
            <Link to='/dashboard'>
                <Logo/>
            </Link>
            <Divider marginTop='1rem'/>
            <div className="flex flex-col mt-3">
                <button className="w-full p-3" onClick={() => dashboardTab(1)}>
                    Dashboard
                </button>
                <button className="w-full p-3" onClick={() => myEventsTab(2)}>
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