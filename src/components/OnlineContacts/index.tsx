import React from 'react';

import { IoIosMore } from 'react-icons/io';
import { Container } from './styles';

import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';
import person4 from '../../assets/person4.png';
import person5 from '../../assets/person5.png';
import person6 from '../../assets/person6.png';
import person7 from '../../assets/person7.png';
import person8 from '../../assets/person8.png';

const OnlineContacts: React.FC = () => {
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
    </Container>
  );
};

export default OnlineContacts;
