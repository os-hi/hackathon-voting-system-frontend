import useFetch from '../../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar';
import banner from '../../assets/banner-discord.jpg'

const Scoreboard = () => {
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
          className="w-full h-auto shadow-2xl rounded-lg p-10 flex flex-col justify-center items-center"
          >
          
          <div className='w-full h-full overflow-hidden'>
            <h1 className='font-bold text-lg w-full text-left'>Hackathon Winner</h1>
            <div className='w-full flex  justify-between mx-20 mt-10 mb-14'>
              <p className='w-full text-3xl font-bold text-secondary'>{event?.eventWinner?.squadName}</p>
              <p className='w-full text-3xl font-bold'>{event?.eventWinner?.total} %</p>
            </div>
            <div className='w-full flex flex-col'>
              <div className='flex justify-evenly bg-primary text-white px-10 py-3'>
                <div className='w-full bg-primary text-white'>Rank</div>
                <div className='w-full bg-primary text-white'>Participating</div>
                <div className='w-full bg-primary text-white'>Overall Scoring</div>
              </div>
              <div className='w-full flex flex-col'>
                {event && event.rating.map((rating) => (
                  <div className='flex justify-evenly px-10 py-3 m-3' key={rating}>
                    <div className='w-full'>{rating.rank }</div>
                    <div className='w-full'>{rating.squadName}</div>
                    <div className='w-full font-bold ml-5'>{rating.total} %</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
