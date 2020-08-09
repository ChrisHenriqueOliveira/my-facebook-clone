/* eslint-disable react/no-array-index-key */
import React from 'react';

import { IoIosVideocam, IoIosCall, IoIosMore } from 'react-icons/io';
import { Container, GroupPlan, OnlineContacts } from './styles';

import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';
import person4 from '../../assets/person4.png';
import person5 from '../../assets/person5.png';
import person6 from '../../assets/person6.png';
import person7 from '../../assets/person7.png';
import person8 from '../../assets/person8.png';

const Dashboard: React.FC = () => {
  const onlineContactsItems = [
    {
      id: '1',
      name: 'Cierra Vega',
      image: person1,
    },
    {
      id: '2',
      name: 'Cierra Vega',
      image: person2,
    },
    {
      id: '3',
      name: 'Cierra Vega',
      image: person3,
    },
    {
      id: '4',
      name: 'Cierra Vega',
      image: person4,
    },
    {
      id: '5',
      name: 'Cierra Vega',
      image: person5,
    },
    {
      id: '6',
      name: 'Cierra Vega',
      image: person6,
    },
    {
      id: '7',
      name: 'Cierra Vega',
      image: person7,
    },
    {
      id: '8',
      name: 'Cierra Vega',
      image: person8,
    },
  ];

  return (
    <Container>
      <div className="left-side">
        <GroupPlan>
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
        </GroupPlan>

        <OnlineContacts>
          <div className="header">
            <h1>Online Contacts</h1>
            <IoIosMore size={25} />
          </div>

          <ul>
            {onlineContactsItems.map(contact => (
              <li key={contact.id}>
                <img src={contact.image} alt={contact.id} />
                <p>{contact.name}</p>
              </li>
            ))}
          </ul>
        </OnlineContacts>
      </div>
      <div className="main" />
      <div className="right-side" />
    </Container>
  );
};

export default Dashboard;
