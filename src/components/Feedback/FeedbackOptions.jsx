import React from 'react';
import { Button, ButtonList, Title } from './Feedback.styled';

export const FeedbackOptions = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => (
  <>
    <Title>Please, leave feedback</Title>
    <ButtonList>
      <li>
        <Button onClick={onGoodFeedback}>Good</Button>
      </li>
      <li>
        <Button onClick={onNeutralFeedback}>Neutral</Button>
      </li>
      <li>
        <Button onClick={onBadFeedback}>Bad</Button>
      </li>
    </ButtonList>
  </>
);
