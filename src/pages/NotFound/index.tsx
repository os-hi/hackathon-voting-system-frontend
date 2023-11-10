import { Image,Heading,Card,CardBody,Container, Button, Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();
  const redirectToLogin = () => navigate('/login', { replace: true });

  return (
        <Card boxShadow='2xl' >
           <CardBody align='center' >
             <div className='flex flex-col w-full'>
              <Image
                   src='src/assets/unauthorizedLogo.svg'
                   alt='Green double couch with wooden legs'
                   height="250"
                   width="300"
               />
                  <Container>
                 <Heading margin="4"> Unauthorized Access</Heading>
                 <Text fontSize='lg'  margin="4" > We are sorry...</Text>
                 <Text fontSize='md'  margin="4"> The page you are trying has restricted access. Please try again.</Text>
                 <Button className='w-full bg-secondary text-white rounded-full p-3 hover:bg-accent' onClick={redirectToLogin}> Go back</Button>
                </Container>
                </div>
             </CardBody>
          </Card>
    )
}
export default NotFound
