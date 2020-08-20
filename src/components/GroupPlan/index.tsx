import React from 'react';

import { IoIosCall, IoIosVideocam } from 'react-icons/io';
import { Container } from './styles';

const GroupPlan: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <img
          src="https://i.pinimg.com/originals/06/34/ea/0634ea178879347db16353c1c07be865.jpg"
          alt="Person1"
        />
        <img
          src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
          alt="Person2"
        />
      </div>
      <div className="info">
        <h1>Jessica’s Wedding Plan</h1>
        <p>Active Now</p>
      </div>
      <div className="buttons">
        <button type="button">
          <IoIosCall />
          Call Group
        </button>
        <button type="button">
          <IoIosVideocam />
          Video Call
        </button>
      </div>
    </Container>
  );
};

export default GroupPlan;
