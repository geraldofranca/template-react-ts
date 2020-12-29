import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from '@/presentation/styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
  </Router>
);

export default App;
