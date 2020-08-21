/* eslint-disable react/no-array-index-key */
import React from 'react';

import { IoIosVideocam, IoIosCall } from 'react-icons/io';
import { Container } from './styles';

import OnlineContacts from '../../components/OnlineContacts';
import GroupPlan from '../../components/GroupPlan';
import Stories from '../../components/Stories';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div className="left-side">
        <GroupPlan />
        <OnlineContacts />
      </div>
      <div className="main" />
      <div className="right-side">
        <Stories />
      </div>
    </Container>
  );
};

export default Dashboard;
