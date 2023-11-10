import { Card,CardBody,Image,Button,Text,Link} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();
  const redirectToLogin = () => navigate('/login', { replace: true });

  return (
        <Card align='center'>
            <CardBody>
              <Image
                   src='src/assets/unauthorizedLogo.png'
                   alt='Green double couch with wooden legs'
                   height="250"
                   width="300"
               />
                 <Text fontSize='lg'>Unauthorised Access</Text>
                 <Text fontSize='lg'> We are sorry...</Text>
                 <Text fontSize='md'> The page you are trying has restricted access. Please try again.</Text>
                  <Button bg='green' onClick={redirectToLogin}> Go back</Button>
             </CardBody>
          </Card>
    )
}
export default NotFound
