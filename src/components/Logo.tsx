import {Link} from 'react-router-dom';
const Logo = () => {
    return ( 
        <Link to='/home' className="w-12 h-12 flex justify-center items-center gap-3 ml-5">
            <img src="./src/assets/logo.png" alt="logo" />
            <h1 className="font-bold">HackaVote</h1>
        </Link>
     );
}
 
export default Logo;