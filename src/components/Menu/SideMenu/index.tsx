import React from 'react';

import { Container } from './styles';

import fbLogo from '../../../assets/fbLogo.svg';
import eventsMenuItem from '../../../assets/eventsMenuItem.svg';
import savedMenuItem from '../../../assets/savedMenuItem.svg';
import gamesMenuItem from '../../../assets/gamesMenuItem.svg';
import loveMenuItem from '../../../assets/loveMenuItem.svg';
import videosMenuItem from '../../../assets/videosMenuItem.svg';
import helpMenuItem from '../../../assets/helpMenuItem.svg';
import configMenuItem from '../../../assets/configMenuItem.svg';
import dashboardMenuItem from '../../../assets/dashboardMenuItem.svg';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <img src={fbLogo} alt="Logo" />

      <div className="menu-icons">
        <img src={eventsMenuItem} alt="Events" />
        <img src={savedMenuItem} alt="Saves" />
        <img src={gamesMenuItem} alt="Games" />
        <img src={loveMenuItem} alt="Love" />
        <img src={videosMenuItem} alt="Videos" />
        <img src={helpMenuItem} alt="Help" />
        <img src={configMenuItem} alt="Configs" />
        <img src={dashboardMenuItem} alt="Dashboard" />
      </div>
    </Container>
  );
};

export default SideMenu;
