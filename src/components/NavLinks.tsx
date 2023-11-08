import {Link} from 'react-router-dom'
const NavLinks = () => {
    return ( 
        <ul className="w-60 flex flex-row justify-center items-center gap-2">
            <Link to='/faq' className="w-30 px-10 py-2" >
                FAQ
            </Link>
            <Link to='/login' className="w-30 px-10 py-2 rounded-md bg-purple text-white">
                Login
            </Link>
        </ul>
     );
}
 
export default NavLinks;