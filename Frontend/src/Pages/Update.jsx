import React from 'react'
import { Box,FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Flex, } from '@chakra-ui/react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
const InitialStates = {
  customerName: '',
    contactNumber: '',
    serviceType: '',
    Image:'',
}
function Update(){
const Nav = useNavigate();
  const {id} = useParams();
  console.log(id);

  const [formdata, setFormData] = React.useState(InitialStates);
  const [data, setData] = React.useState("");

  React.useEffect(()=>{
    const loadData = async()=>{
      try {
        let Response = await axios.get(`http://127.0.0.1:8080/api/v1/Appointments/${id}`)
        setData(Response.data.data.appointment);
      } catch (error) {
        console.log(error);
      }
    }
    loadData()
  },[id])

  const handleChange = (e)=>{
     const { name} = e.target
     setFormData((oldState)=>{return{
      ...oldState,
      [name] : e.target.value
     }})
  } 

   const {customerName, contactNumber,serviceType} = formdata;

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      let Response = await axios.put(`http://127.0.0.1:8080/api/v1/Appointments/${id}`,{
        customerName, 
        contactNumber,
        serviceType,
        Image
      })
      console.log(Response);
    } catch (error) {    
      console.log(error);
    }
    Nav('/')
  }

  
  return (
    <Box>
     <Flex justify="space-around" align="center" gap="10px">
      <Box boxShadow='lg' bg='white' rounded={10}  width="400px" height="auto" margin="auto" p={5} mt={10}>
      <Heading align="center" p={3}>UPDATE APPOINTMENTS</Heading>
      <form onSubmit={handleSubmit}>
      <FormControl>
          <FormLabel>customerName</FormLabel>
           <Input 
           type="text"
           name="customerName"
           onChange={handleChange}
           placeholder={data.customerName} />
          <br /><br />
      <FormLabel>contactNumber</FormLabel>
          <Input
           type="number"
           name="contactNumber"
           onChange={handleChange} 
          placeholder={data.contactNumber} />
         <br /><br />
      <FormLabel>serviceType</FormLabel>
        <Input
          type="text"
          name="serviceType"
          onChange={handleChange}
        placeholder={data.serviceType} />
         <br /><br />
         <FormLabel>Image</FormLabel>
           <Input 
           type="text"
           name="Image"
           onChange={handleChange}
           placeholder={data.Image} />
          <br /><br />
         <Button type="submit" value="submit" colorScheme='blue' pl={5} pr={5}>PUT</Button>
      </FormControl>
      </form>
      </Box>
     </Flex>
    </Box>
  )
}
export default Update