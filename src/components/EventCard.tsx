import { Card,Image, CardHeader, CardBody, Heading, Grid, GridItem, Text, CardFooter, Button, Box } from '@chakra-ui/react'
const EventCard = (props) => {
    return ( 
        <Card maxW='md' maxH='md' boxShadow="xl">
            <CardHeader>
                <Image src='./src/assets/banner.jpg' alt='Banner' width={'100%'} height='120px'/>
                <Heading size='md'>{props.event.topic}</Heading>
            </CardHeader>
            <CardBody>
                <Grid templateColumns='repeat(5, 1fr)' gap={12}>
                    <GridItem colSpan={3}>
                        <Text fontWeight='bold' fontSize='sm' >Date</Text>
                        <Text fontSize='small'>{props.event.start_date}</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Text fontWeight='bold' fontSize='sm'>Venue</Text>
                        <Text fontSize='small'>{props.event.venue}</Text>
                    </GridItem>
                </Grid>
                <Box>
                    <Text fontWeight='bold' fontSize='sm' mt='2'>Description</Text>
                    <Text fontSize='small'>{props.event.description}</Text>
                </Box>
            </CardBody>
            <CardFooter>
                <Button bg='purple.50' color='white' size='md' flex='1'>
                    View
                </Button>
            </CardFooter >
        </Card>
     );
}
 
export default EventCard;