import React from 'react';

import { IoIosSearch } from 'react-icons/io';

import { Container } from './styles';

const TopMenu: React.FC = () => {
  return (
    <Container>
      <div className="menu-items">
        <ul>
          <li>Home</li>
          <li>Notification</li>
          <li>Watch</li>
          <li>Marketplace</li>
          <li>Groups</li>
          <li>Messenger</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="profile">
        <IoIosSearch size={25} />
        <img
          src="https://avatars3.githubusercontent.com/u/56655841?s=460&u=acd8f1d1bd91b55e326f4c492478ec9975115902&v=4"
          alt="Profile"
        />
      </div>
    </Container>
  );
};

export default TopMenu;
