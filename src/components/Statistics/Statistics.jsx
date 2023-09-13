import React from 'react';
import { StatisticList } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad }) => (
  <>

    <StatisticList>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
    </StatisticList>
  </>
);
