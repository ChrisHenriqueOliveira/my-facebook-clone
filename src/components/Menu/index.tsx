import React from 'react';

import { Container } from './styles';

import SideMenu from './SideMenu/index';
import TopMenu from './TopMenu/index';

const Menu: React.FC = () => {
  return (
    <Container>
      <>
        <SideMenu />
        <TopMenu />
      </>
    </Container>
  );
};

export default Menu;
