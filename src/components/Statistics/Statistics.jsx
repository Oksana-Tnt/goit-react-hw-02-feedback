import React from 'react';
import { StatisticList } from './Statistics.styled';

export const Statistics = ({ options, totalFeedback, positivePercentage }) => {
  return (
    <StatisticList>
      {Object.keys(options).map((key, ind) => {
        return (
          <li key={ind}>
            {key} : {options[key]}
          </li>
        );
      })}
      <li>Total feedback: {totalFeedback}</li>
      <li>Positive percentage: {positivePercentage}</li>
    </StatisticList>
  );
};
