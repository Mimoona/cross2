import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
