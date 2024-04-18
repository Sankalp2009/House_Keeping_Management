import React from 'react'
import { Box,FormControl,FormLabel,Input,Button,Heading,Flex} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const InitialStates = {
  customerName: '',
    contactNumber: '',
    serviceType: '',
    Image:''
}

function Create() {

  const Nav = useNavigate()

  const [formdata, setFormData] = React.useState(InitialStates);
  
  
  const handleChange = (e)=>{
     const { name} = e.target
     setFormData((oldState)=>{return{
      ...oldState,
      [name] : e.target.value
     }})
  }
   
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      let Response = await axios.post('http://127.0.0.1:8080/api/v1/Appointments',{
        customerName : formdata.customerName, 
        contactNumber: formdata.contactNumber,
        serviceType: formdata.serviceType,
        Image:formdata.Image,
      })
      console.log(Response);
    } catch (error) {
      console.log(error);
    }
    Nav('/');
  }  

const handleHome = ()=>{
    Nav('/');
  }
  

  return (
    <Box boxShadow='lg' bg='white' rounded={10}  width="400px" height="auto" margin="auto" p={5} mt={10}>
      <Heading align="center" p={5}>ADD Appointments</Heading>
      <form onSubmit={handleSubmit}>
      <FormControl isRequired>
          <FormLabel>customer_Name</FormLabel>
           <Input 
           type="text"
           name="customerName"
           onChange={handleChange}
           placeholder='customerName' />
          <br /><br />
      <FormLabel>contact_Number</FormLabel>
          <Input
           type="number"
           name="contactNumber"
           onChange={handleChange} 
          placeholder='contactNumber' />
         <br /><br />
      <FormLabel>service_Type</FormLabel>
        <Input
          type="text"
          name="serviceType"
          onChange={handleChange}
        placeholder='serviceType' />
         <br /><br />
         <FormLabel>Image</FormLabel>
           <Input 
           type="text"
           name="Image"
           onChange={handleChange}
           placeholder="Image" />
          <br /><br />
         <Flex justify="space-between" align="center" p={2} >
         <Button type="submit" value="submit" colorScheme='blue' pl={5} pr={5}>ADD</Button>
         <Button colorScheme='blue' pl={5} pr={5} onClick={handleHome} >HOME</Button>
         </Flex>
      </FormControl>
      </form>
    </Box>
  )
}

export default Create