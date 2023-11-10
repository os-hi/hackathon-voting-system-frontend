import NavBar from '../../components/NavBar';
import { Card,CardBody,CardHeader, Heading,Accordion,AccordionItem,AccordionButton,AccordionPanel,Flex,Text,Container} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


function Faq() {
    return(
       <>
       <NavBar/>
        <main className="flex">
          <Card >
           <CardHeader>
                <Heading size='lg' fontSize='3xl'> Frequently Asked Questions </Heading>
          </CardHeader>
          <CardBody>
          <Flex
               align={'center'}
               justify={'center'}>
               <Container>
                 <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
                   <AccordionItem>
                     <AccordionButton
                       display="flex"
                       alignItems="center"
                       justifyContent="space-between"
                       p={4}>
                       <Text color="#170F49" fontSize="lg" fontWeight="bold">What is the purpose of this HackVote?</Text>
                       <ChevronDownIcon fontSize="24px" />
                     </AccordionButton>
                     <AccordionPanel pb={4}>
                       <Text color="gray.600">
                         Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                         Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                     </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem>
                     <AccordionButton
                       display="flex"
                       alignItems="center"
                       justifyContent="space-between"
                       p={4}>
                       <Text color="#170F49" fontSize="lg" fontWeight="bold">What happens in case of a tie or a close vote?</Text>
                       <ChevronDownIcon fontSize="24px" />
                     </AccordionButton>
                     <AccordionPanel pb={4}>
                       <Text color="gray.600">
                       Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                        Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                     </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem>
                     <AccordionButton
                       display="flex"
                       alignItems="center"
                       justifyContent="space-between"
                       p={4}>
                       <Text color="#170F49" fontSize="lg" fontWeight="bold">What do I do if I encounter technical issues ?</Text>
                       <ChevronDownIcon fontSize="24px" />
                     </AccordionButton>
                     <AccordionPanel pb={4}>
                       <Text color="gray.600">
                             Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                             Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                     </AccordionPanel>
                   </AccordionItem>
                    <AccordionItem>
                   <AccordionButton
                    display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                      p={4}>
                      <Text color="#170F49" fontSize="lg" fontWeight="bold"> What is a Squad Leader?</Text>
                      <ChevronDownIcon fontSize="24px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                      <Text color="gray.600">
                      Lorem ipsum dolor sit amet consectetur. Sit morbi odio tellus aliquam ut scelerisque.
                       Neque dui risus euismod ornare sit hendrerit fringilla faucibus.
                       </Text>
                        </AccordionPanel>
                         </AccordionItem>
                 </Accordion>
               </Container>
             </Flex>
            </CardBody>
            </Card>
          </main>
         </>
    )
}

export default Faq