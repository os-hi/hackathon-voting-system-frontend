import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { extendTheme } from "@chakra-ui/react"

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundery } from './ErrorBoundery.tsx';

const theme = extendTheme({
  colors: {
    dark: '#1F1F21',
    light: {
      50: '#F6F8FB',
      500: '#CFCFCF'
    },
    purple: {
      50: '#8461EE',
      900: '#7A52B3'
    },
    green: '#00B7BF',
    blueviolet: '#5829E5',
    gray: '#8A8A8E',
    blue: '#4299E1',
    orange: '#F56565'
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundery fallback={<h1>An Error Has occured</h1>}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundery>
  </React.StrictMode>
);
