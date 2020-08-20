import React from 'react';

import { IoIosMore } from 'react-icons/io';
import { Container } from './styles';

const Stories: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h1>Online Contacts</h1>
        <IoIosMore size={25} />
      </div>
    </Container>
  );
};

export default Stories;
