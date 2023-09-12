import React from 'react';
import { Button, ButtonList, Container, StatisticList, Title } from './Feedback.styled';

export class Feedback extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  IncrementGoodFeedback = ()=>{
    this.setState(prevState=>{
      return{
        good:prevState.good +1,
      };
    });
  };

  IncrementNeutralFeedback = ()=>{
    this.setState(prevState=>{
      return{
        neutral:prevState.neutral +1,
      };
    });
  };

  IncrementBadFeedback = ()=>{
    this.setState(prevState=>{
      return{
        bad:prevState.bad +1,
      };
    });
  };

  render() {
    return (
      <Container>
        <Title>Please, leave feedback</Title>
        <ButtonList>
          <li>
            <Button onClick={this.IncrementGoodFeedback}>Good</Button>
          </li>
          <li>
            <Button onClick={this.IncrementNeutralFeedback}>Neutral</Button>
          </li>
          <li>
            <Button onClick={this.IncrementBadFeedback}>Bad</Button>
          </li>
        </ButtonList>
        <Title>Statistics</Title>
        <StatisticList>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </StatisticList>
      </Container>
    );
  }
}

