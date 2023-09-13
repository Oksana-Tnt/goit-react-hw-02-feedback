import React from 'react';
import {
  Button,
  ButtonList,
  Container,
  StatisticList,
  Title,
} from './Feedback.styled';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedback: false,
  };

  IncrementGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        feedback: true,
      };
    });
  };

  IncrementNeutralFeedback = event => {
    console.log(event);
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        feedback: true,
      };
    });
  };

  IncrementBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        feedback: true,
      };
    });
  };

  render() {
    return (
      <Container>
        <FeedbackOptions
          onGoodFeedback={this.IncrementGoodFeedback}
          onNeutralFeedback={this.IncrementNeutralFeedback}
          onBadFeedback={this.IncrementBadFeedback}
        />

        {this.state.feedback ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <Notification />
        )}
      </Container>
    );
  }
}
