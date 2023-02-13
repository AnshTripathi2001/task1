import React from 'react';
import './Styles/styles.css';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import CardUI from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Main />

        <CardUI />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
