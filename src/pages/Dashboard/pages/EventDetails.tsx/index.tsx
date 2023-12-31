import { Card, CardBody, CardHeader, Heading, GridItem, Grid, Text, Box } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import useFetch from "../../../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import banner from "../../../../assets/banner.jpg";
import {useState, useEffect} from 'react';
import axios from 'axios'

const EventDetails = () => {
    const {id, judgeId} = useParams();
    const url = "https://oyster-app-wizuy.ondigitalocean.app/api/events/"
    const {data, isLoading, error} = useFetch(url + id)
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              'https://oyster-app-wizuy.ondigitalocean.app/api/auth/user-profile',
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
              }
            );
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors
          }
        };
    
        fetchData(); // Call your function when the component mounts
      }, []);

      const handleAddWinner = async () => {
        try {
          const response = await axios.post(
            `https://oyster-app-wizuy.ondigitalocean.app/api/events/${id}/addWinner`,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              }
            }
          );
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle errors
        }
      };
    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    return (
        <div className="w-full h-full flex">
            <SideBar />
            <div className="w-full h-full relative p-10 flex">
                <div className=" w-full h-full shadow-2xl rounded-lg flex flex-col overflow-hidden">
                    <img src={banner} alt="banner" className="w-full h-72 object-fit mb-6"/>
                    <div className="w-full h-full pl-5 flex">
                        {data && data.events.map(event => (
                            <Card maxW={'2xl'} maxH={'6xl'} key={event.id}>
                                <CardHeader>
                                    {event &&<Heading size='2xl' key={event.id}>{event.topic}</Heading>}
                                </CardHeader>
                                <CardBody>
                                <Grid templateColumns='repeat(5, 1fr)' gap={12} marginBottom={6}>
                                    <GridItem colSpan={3}>
                                        <Text fontWeight='bold' fontSize='xl' >Start Date</Text>
                                        {event &&<Text fontSize='md'key={event.id}>{event.start_date}</Text>}
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <Text fontWeight='bold' fontSize='xl'>End Date</Text>
                                        {event &&<Text fontSize='md' key={event.id}>{event.end_date}</Text>}
                                    </GridItem>
                                </Grid>
                                <Grid templateColumns='repeat(5, 1fr)' gap={12} marginBottom={6}>
                                    <GridItem colSpan={3}>
                                        <Text fontWeight='bold' fontSize='xl' >Location</Text>
                                        {event &&<Text fontSize='md' key={event.id}>{event.venue}</Text>}
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <Text fontWeight='bold' fontSize='xl'>Number of Teams</Text>
                                        {data &&<Text fontSize='md' key={event.id}>{data.number_of_squads}</Text>}
                                    </GridItem>
                                </Grid>
                                <Box>
                                    <Text fontWeight='bold' fontSize='xl' mt='2'>Description</Text>
                                    {event &&<Text fontSize='lg'>{event.description}</Text>}
                                </Box>
                                </CardBody>
                            </Card>
                        ))} 
                        <div className="w-full h-6xl flex flex-col">
                            <div className="w-full h-full flex justify-around p-8">
                                <div className="w-full h-full flex flex-col gap-4">
                                    <h1 className="text-2xl font-bold">Hackathon Winner</h1>
                                    <div className="mx-5 flex justify-between items-center">
                                        <h1 className="text-4xl font-light ml-10">TBA</h1>
                                        {/* {userData && userData.roles === 'ORGANIZER' && (
                                        <button className="w-20 h-12 p-3  bg-secondary rounded-lg text-white font-bold text-center hover:bg-accent">edit</button>                                         
                                        )} */}
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold">Hackathon Teams</h1>
                                        {data && data.events.map((event) =>
                                            event.squads.map((squad) => (
                                            <div key={squad.squad_id} className="flex justify-between">
                                                <h1 className="text-xl font-normal m-3" key={squad.squad_id} >- {squad.name}</h1>
                                                <button key={squad.squad_id} className="w-20 h-12 p-3 mr-10 bg-purple rounded-lg text-white font-bold text-center hover:bg-accent"><Link className="w-full" to={`/dashboard/events/castvote/${event.id}/${judgeId}/${squad.id}`}>vote</Link></button>
                                            </div>
                                            ))
                                        )}

                                    </div>
                                </div>
                                {userData && userData.roles === 'ORGANIZER' && (
                                     <button onClick={handleAddWinner} className="w-60 h-14 p-3 bg-purple rounded-lg text-white font-bold text-center hover:bg-accent">
                                        Add a Winner
                                    </button>
                                )}
                                {/* {userData && userData.roles === 'JUDGE' && (
                                     <button className="w-60 h-14 p-3 bg-purple rounded-lg text-white font-bold text-center hover:bg-accent">
                                        Vote
                                    </button>
                                )} */}
                                {userData && userData.roles === 'SQUAD LEADER' && (
                                     <button className="w-60 h-14 p-3 bg-dark rounded-lg text-white font-bold text-center hover:bg-accent">
                                        <Link to={`/dashboard/events/scoreboard/${id}`}>View Scoreboard</Link>
                                    </button>
                                )}
                                {userData && userData.roles === 'SQUAD MEMBER' && (
                                     <button className="w-60 h-14 p-3 bg-dark rounded-lg text-white font-bold text-center hover:bg-accent">
                                        <Link to={`/dashboard/events/scoreboard/${id}`}>View Scoreboard</Link>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>    
            </div>     
        </div>
               
     );
}
 
export default EventDetails;