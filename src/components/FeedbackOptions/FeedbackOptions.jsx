import React from 'react';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map((key, ind) => {
        return (
          <Button key={ind} onClick={() => onleaveFeedback(key)}>
            {key}
          </Button>
        );
      })}
    </ButtonList>
  );
};
