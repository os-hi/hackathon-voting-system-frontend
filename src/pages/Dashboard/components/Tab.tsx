import Logo from "../../../components/Logo";
import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Tab = () => {
    return ( 
        <header className="navigation-bar w-96 h-full pl-8 pt-5">
            <Link to='/dashboard'><Logo/></Link>
            <Divider marginTop='1rem'/>
        </header>
     );
}
 
export default Tab;