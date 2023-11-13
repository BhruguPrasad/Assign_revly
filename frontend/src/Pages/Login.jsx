import React, { useState } from 'react'
import { Text, FormLabel, Input, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
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
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://deploy-backend-test.onrender.com/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.token) {
                    alert("Login Successful")
                    localStorage.setItem("token", JSON.stringify(res.token))
                    navigate("/dashboard")
                }
            })
            .catch((err) => alert("Invalid Credentials"))
    }
    return (
        <>
            <Text fontSize='2xl' as="b">Login Page</Text>
            <form style={{ display: "flex", flexDirection: "column", width: "30%", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "20px" }} onSubmit={handleSubmit}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email' type="email" name="email" value={formData.email} onChange={handleChange} />
                <FormLabel>Password</FormLabel>
                <Input placeholder='Enter Your Password' type="password" name="password" value={formData.password} onChange={handleChange} />
                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                >
                    Submit
                </Button>
            </form>
        </>
    )
}

export default Login
