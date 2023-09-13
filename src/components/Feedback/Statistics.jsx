import React from 'react';
import { StatisticList, Title } from './Feedback.styled';

export const Statistics = ({ good, neutral, bad }) => (
  <>
    <Title>Statistics</Title>
    <StatisticList>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
    </StatisticList>
  </>
);
