import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import Menu from './components/Menu';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
