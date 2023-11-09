import NavBar from '../../components/NavBar';
import useFetch from '../../hooks/useFetch';
import { Card, CardHeader, CardBody, Heading, Box, Grid, GridItem, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
export default function Home() {

  const url = "https://jacereno.000webhostapp.com/api/events/"
  const {data: event, isLoading, error} = useFetch(url + "1")

  if (error) return <p>{error}</p>
  if (isLoading) return  <p>Loading...</p>
  return(
    <>
      <NavBar />
      <main className="flex gap-12">
        <div className="banner">
          <img src="./src/assets/banner.jpg" alt="banner" />
        </div>
        <Card maxW='xl' maxH='xl'>
          {event && (
            <>
              <CardHeader>
                <Heading size='lg' fontSize='6xl'>{event.topic}</Heading>
              </CardHeader>
              <CardBody>
                <Grid templateColumns='repeat(5, 1fr)' gap={12}>
                  <GridItem  mt='6' colSpan={3}>
                    <Text fontWeight='bold' fontSize='lg' >Date</Text>
                    <Text fontSize='md'>{event.start_date}</Text>
                  </GridItem>
                  <GridItem  mt='6' colSpan={2}>
                    <Text fontWeight='bold' fontSize='lg'>Venue</Text>
                    <Text fontSize='md'>{event.venue}</Text>
                  </GridItem>
                </Grid>
                  <Box mt='6'>
                    <Text fontWeight='bold' fontSize='lg'>Description</Text>
                    <Text fontSize='md'>{event.description}</Text>
                  </Box>
              </CardBody>
              <CardFooter>   
                  <Button bg='green' color='white' size='lg' flex='1' mt='6'>
                    <Link to='/login' className='w-full'>Join</Link>
                  </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </main>
    </>
  )
}
