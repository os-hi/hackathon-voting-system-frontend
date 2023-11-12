import { useState } from 'react';
import axios from 'axios';
import useFetch from '../../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar';

const CastVote = () => {
  const { id, judgeId, squadId } = useParams();
  const url = `https://oyster-app-wizuy.ondigitalocean.app/api/criterions`;
  const { data, isLoading, error } = useFetch(url);
  const [votes, setVotes] = useState({});
  const [squadVotes, setSquadVotes] = useState([]);

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  // Update the votes state when a button is clicked
  const handleVote = (event, criterionId, rating) => {
    event.preventDefault(); 
    const votePerCriteria = {
      "event_criteria_id": criterionId,
        "rating": rating
    }
    setSquadVotes(prevVotes => [...prevVotes, votePerCriteria]);
  };

  // Function to submit votes to the backend
  const handleSubmitVotes = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const eventID = id;
      // const judgeID = judgeId;
      const squadID = squadId;
      
      const loggedInUser = await axios.get(`https://oyster-app-wizuy.ondigitalocean.app/api/auth/user-profile`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      const userID = parseInt(loggedInUser.data.id);
      
      const judge = await axios.get(`https://oyster-app-wizuy.ondigitalocean.app/api/events/${eventID}/judgesByUserID/${userID}`);
      const judgeID = judge.data.data.judge_id;

      const votesArray = Object.entries(votes).map(([event_criteria_id, rating]) => ({
        event_criteria_id: parseInt(event_criteria_id),
        rating: parseFloat(rating),
      }));

      const response = await axios.post(
        `https://oyster-app-wizuy.ondigitalocean.app/api/events/${eventID}/judges/${judgeID}/squads/${squadID}/scores`,
          squadVotes,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log("votesArray1:",votesArray);
      console.log('Votes submitted successfully:', response.data);

      // Reset the votes state after submission
      setVotes({});

      // Add the squadVotes to the state
      // setSquadVotes((prevSquadVotes) => [...prevSquadVotes, ...votes]);
    } catch (error) {
      console.log(squadVotes)
      console.log('err', votes)
      
      console.error('Error submitting votes:', error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-0">
      <SideBar />
      <div className="w-full h-full px-10 pt-20">
        <form
          className="w-full h-auto shadow-2xl rounded-lg p-10 flex flex-col justify-center items-center"
        >
          {data &&
            data.map((criteria) => (
              <div key={criteria.criterion} className="w-auto h-auto flex flex-col m-5">
                <h2 className="font-bold w-full flex flex-start text-lg items-center mb-3" key={criteria.id}>
                  {criteria.criterion}
                  <span className="text-sm font-light ml-3"> 1 = Dissatisfied 5 = Strongly Satisfied</span>
                </h2>
                <div className=" w-full h-full border border-light bg-gray p-3 rounded-md">
                  <p className="text-md h-auto text-secondary font-bold bg-gray m-2" key={criteria.id}>
                    {criteria.description}
                  </p>
                  <p className="text-sm bg-gray m-2">
                    {criteria.guidelines.map((guideline: any) => (
                      <li className="bg-gray m-2" key={guideline}>
                        {guideline}
                      </li>
                    ))}
                  </p>
                </div>
                <div className="w-full flex justify-between bg-transparent">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      onClick={(e) => handleVote(e,criteria.id, rating)}
                      className="bg-light mt-2 border border-secondary text-black px-16 py-2 m-1 rounded-md hover:bg-secondary hover:text-white active:bg-secondary"
                      key={rating}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          <button onClick={(e) => handleSubmitVotes(e)} type="submit" className="bg-purple text-white py-3 px-10 rounded-lg">
            Submit My Vote
          </button>
        </form>
      </div>
    </div>
  );
};

export default CastVote;
