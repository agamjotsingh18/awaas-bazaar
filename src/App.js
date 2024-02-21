// App.js
import React from 'react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import PropertyForm from './Components/PropertyForm';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listaproperty" element={<PropertyForm />} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
