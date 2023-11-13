import React, { useState } from 'react'
import { Text, FormLabel, Input, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prevFromData => {
      return {
        ...prevFromData,
        [name]: value
      }
    })
  }
  console.log(formData)
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://deploy-backend-test.onrender.com/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Signup Successful")
        navigate("/login")
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <Text fontSize='2xl' as="b">Signup Page</Text>
      <form style={{ display: "flex", flexDirection: "column", width: "30%", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "20px" }} onSubmit={handleSubmit}>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Enter Your Name' type="name" name="name" value={formData.name} onChange={handleChange} />
        <FormLabel>Email</FormLabel>
        <Input placeholder='Enter Your Email' type="email" name="email" value={formData.email} onChange={handleChange} />
        <FormLabel>Password</FormLabel>
        <Input placeholder='Enter Your Password' type="password" name="password" value={formData.password} onChange={handleChange} />
        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
        >
          SIGN UP
        </Button>
      </form>
    </>
  )
}

export default Signup
