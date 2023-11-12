import useFetch from '../../../../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import SideBar from '../SideBar';
import banner from '../../assets/banner-discord.jpg'
import greetings from '../../assets/greetings.svg'
const VoteSubmitted = () => {
  const {id} = useParams();
  const url = `https://oyster-app-wizuy.ondigitalocean.app/api/events/${id}/getEventsFinalScore`;
  const {data: event, isLoading, error} = useFetch(url)

  if (error) return <p>{error}</p>
  if (isLoading) return  <p>Loading...</p>
  return (
    <div className="w-full h-full flex justify-center items-center p-0">
      <SideBar />
      <div className="w-full h-full px-10 pt-20">
      <img src={banner} alt="banner" className='w-full h-48 object-fit'/>
        <div
          className="w-full h-auto shadow-2xl rounded-lg p-10 flex flex-col justify-center items-center gap-5"
          >
            <h1 className="font-bold text-lg w-full text-center">Vote Submitted</h1>
            <img src={greetings} alt="greetings" className='w-1/2 h-72'/>
            <h1 className="font-bold text-2xl w-full text-center">Thank you for voting</h1>
            <div className='w-full flex justify-end'>
                <button className='max-w-lg px-10 py-3 bg-purple rounded-lg text-white font-bold mt-10 mb-10 hover:bg-accent'>
                   <Link to='/dashboard'>Back to my dashboard</Link> 
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VoteSubmitted;
