import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Stack, Text, Input, Button, Heading, FormControl, FormLabel, InputGroup, InputRightElement, Alert } from '@chakra-ui/react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const navigate = useNavigate(); // Import useNavigate from react-router-dom
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard'); // Redirect to the dashboard after successful login
      } catch (error) {
        setError(error.message);
      }
    };

  return (
    <Stack spacing={4} maxW="400px" mx="auto" mt={8}>
      <Heading as="h2" size="xl">
        Login
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
        <InputGroup size="md">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="3rem">
            <Button h="1.5rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
      <Text>
        Don't have an account?{' '}
        <Link as={RouterLink} to="/signup" color="blue.500">
          Sign up here.
        </Link>
      </Text>
    </Stack>
  );
};

export default Login;
