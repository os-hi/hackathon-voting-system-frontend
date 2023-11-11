import logo from '../assets/logo.png'
const DbLogo = () => {
    return (
        <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12"/>
            <h1 className="font-bold">HackaVote</h1>
        </div>
     );
}
 
export default DbLogo;