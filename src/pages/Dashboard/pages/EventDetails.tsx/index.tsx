import { Card, CardBody, CardHeader, Heading, GridItem, Grid, Text, Box } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import banner from "../../../../assets/banner.jpg";
const EventDetails = () => {
    const {id} = useParams();
    const url = "https://oyster-app-wizuy.ondigitalocean.app/api/events/"
    const {data: events, isLoading, error} = useFetch(url + id)

    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    return (
        <div className="w-full h-full flex">
            <SideBar/>
            <div className="w-full h-full relative p-10 flex">
                <div className=" w-full h-full shadow-2xl rounded-lg flex flex-col overflow-hidden">
                    <img src={banner} alt="banner" className="w-full h-72 object-fit mb-6"/>
                    <div className="w-full h-full pl-5 flex">
                        {events.events.map(event => (
                            <Card maxW={'2xl'} maxH={'6xl'} key={event.id}>
                                <CardHeader>
                                    {events &&<Heading size='2xl'>{event.topic}</Heading>}
                                </CardHeader>
                                <CardBody>
                                <Grid templateColumns='repeat(5, 1fr)' gap={12} marginBottom={6}>
                                    <GridItem colSpan={3}>
                                        <Text fontWeight='bold' fontSize='xl' >Start Date</Text>
                                        {event &&<Text fontSize='md'>{event.start_date}</Text>}
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <Text fontWeight='bold' fontSize='xl'>End Date</Text>
                                        {event &&<Text fontSize='md'>{event.end_date}</Text>}
                                    </GridItem>
                                </Grid>
                                <Grid templateColumns='repeat(5, 1fr)' gap={12} marginBottom={6}>
                                    <GridItem colSpan={3}>
                                        <Text fontWeight='bold' fontSize='xl' >Location</Text>
                                        {event &&<Text fontSize='md'>{event.venue}</Text>}
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <Text fontWeight='bold' fontSize='xl'>Number of Teams</Text>
                                        {events &&<Text fontSize='md'>{events.number_of_squads}</Text>}
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
                                <div className="w-1/2 h-full flex flex-col gap-4">
                                    <h1 className="text-2xl font-bold">Hackathon Winner</h1>
                                    <div className="mx-5 flex justify-between items-center">
                                        <h1 className="text-4xl font-light ml-10">TBA</h1>
                                        <button className="w-20 h-12 p-3  bg-secondary rounded-lg text-white font-bold text-center hover:bg-accent">edit</button>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold">Hackathon Teams</h1>
                                        {events.squads.map(squad => (
                                            <div key={squad.squad_id}>
                                                <h1 className="text-xl font-normal m-3">- {squad.squad_name}</h1>
                                                
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="w-60 h-14 p-3 bg-purple rounded-lg text-white font-bold text-center hover:bg-accent">Add a Winner</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>     
        </div>
               
     );
}
 
export default EventDetails;