import {Link} from 'react-router-dom'
import { Box,Flex,Heading } from '@chakra-ui/react'

function Header() {
  return (
    <Box boxShadow='lg' p='1' bg='#0b1120'h="60px">
       <Flex justify="space-evenly">
          <Box color="#e0e6ee">
          <Link to={"/"}>
            <Heading>House Keeping Appointment</Heading>
            </Link>  
          </Box>
          <Box>
           <Link to={"/add"}><button className="Add_button">Add</button></Link> 
          </Box>
       </Flex>
    </Box>
  )
}
export default Header