import React from 'react';

import { IoIosMore } from 'react-icons/io';
import { Container, Story, Event } from './styles';

import story1 from '../../assets/story1.png';
import story2 from '../../assets/story2.png';
import story3 from '../../assets/story3.png';

import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';
import person4 from '../../assets/person4.png';
import person5 from '../../assets/person5.png';
import person6 from '../../assets/person6.png';

import popcorn from '../../assets/popcorn.png';
import event from '../../assets/event.png';

import popcornIcon from '../../assets/popcornIcon.png';
import eventIcon from '../../assets/eventIcon.png';

const Stories: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h1>Stories</h1>
        <IoIosMore size={25} />
      </div>
      <div className="stories">
        <Story>
          <div className="background-filter" />

          <img src={story1} alt="Story" />
          <div className="body">
            <img src={person1} alt="Person" />
            <h1>Kierra Gentry</h1>
          </div>
        </Story>
        <Story>
          <div className="background-filter" />
          <img src={story2} alt="Story" />
          <div className="body">
            <img src={person2} alt="Person" />
            <h1>Bradyn Kramer</h1>
          </div>
        </Story>
        <Story>
          <div className="background-filter" />

          <img src={story3} alt="Story" />
          <div className="body">
            <img src={person3} alt="Person" />
            <h1>Pierre Cox</h1>
          </div>
        </Story>
      </div>

      <div className="events">
        <Event>
          <div className="background-filter" />
          <img src={event} alt="Event" />
          <div className="event-information">
            <div className="event-header">
              <img src={eventIcon} alt="Event Icon" />
              <h1>Pop Corn</h1>
            </div>
            <div className="event-body">
              <p>Start watching with friends & family.</p>
              <button type="button">Watch Now</button>
            </div>
          </div>
          <div className="event-footer">
            <div className="event-people">
              <img src={person4} alt="Person" />
              <img src={person5} alt="Person" />
              <img src={person6} alt="Person" />
            </div>
            <p>35 friends watching now</p>
          </div>
        </Event>
        <Event>
          <div className="background-filter" />
          <img src={popcorn} alt="PopCorn" />
          <div className="event-information">
            <div className="event-header">
              <img src={popcornIcon} alt="PopCorn Icon" />
              <h1>Events</h1>
            </div>
            <div className="event-body">
              <p>Join events near you for free.</p>
              <button type="button">Explore All</button>
            </div>
          </div>
          <div className="event-footer">
            <div className="event-people">
              <img src={person1} alt="Person" />
              <img src={person2} alt="Person" />
              <img src={person3} alt="Person" />
            </div>
            <p>14 friends going</p>
          </div>
        </Event>
      </div>
    </Container>
  );
};

export default Stories;
