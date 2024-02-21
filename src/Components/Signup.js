import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Stack, Text, Input, Button, Heading, FormControl, FormLabel, Alert } from '@chakra-ui/react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Signup = () => {
    const navigate = useNavigate(); // Import useNavigate from react-router-dom
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSignup = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/dashboard'); // Redirect to the dashboard after successful signup
      } catch (error) {
        setError(error.message);
      }
    };

  return (
    <Stack spacing={4} maxW="400px" mx="auto" mt={8}>
      <Heading as="h2" size="xl">
        Sign Up
      </Heading>
      {error && (
        <Alert status="error" rounded="md">
          {error}
        </Alert>
      )}
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="green" onClick={handleSignup}>
        Sign Up
      </Button>
      <Text>
        Already have an account?{' '}
        <Link as={RouterLink} to="/login" color="blue.500">
          Login here.
        </Link>
      </Text>
    </Stack>
  );
};

export default Signup;
