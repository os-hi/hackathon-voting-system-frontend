import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
const NavBar = () => {
    return ( 
        <header className = "fixed top-0 px-12 py-3 flex justify-between items-center w-full h-15 box-border">
            <Link to='/home' className="flex justify-center items-center gap-3 ml-5">
                <Logo/>
            </Link>
            <NavLinks/>
        </header>
     );
}
 
export default NavBar;