import { Card,Image, CardHeader, CardBody, Heading, Grid, GridItem, Text, CardFooter, Button, Box } from '@chakra-ui/react'
const EventCard = (props) => {
    return ( 
        <Card maxW='lg' maxH='lg'>
            <CardHeader>
                <Image src='./src/assets/banner.jpg' alt='Banner' />
                <Heading size='lg'>{props.event.topic}</Heading>
            </CardHeader>
            <CardBody>
                <Grid templateColumns='repeat(5, 1fr)' gap={12}>
                    <GridItem colSpan={3}>
                        <Text fontWeight='bold' fontSize='lg' >Date</Text>
                        <Text fontSize='md'>{props.event.start_date}</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Text fontWeight='bold' fontSize='lg'>Venue</Text>
                        <Text fontSize='md'>{props.event.venue}</Text>
                    </GridItem>
                </Grid>
                <Box>
                    <Text fontWeight='bold' fontSize='lg' mt='2'>Description</Text>
                    <Text fontSize='md'>{props.event.description}</Text>
                </Box>
            </CardBody>
            <CardFooter>
                <Button bg='purple.50' color='white' size='lg' flex='1' mt='2'>
                    View
                </Button>
            </CardFooter>
        </Card>
     );
}
 
export default EventCard;