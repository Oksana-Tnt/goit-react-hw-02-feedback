import React from 'react';
import {
  Button,
  ButtonList,
  Container,
  StatisticList,
  Title,
} from './Feedback.styled';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from 'components/Section/Section';


export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedbackexist: false,
  };

 feedbackOptions = [
    {id:1, feedback:"good"},
    {id:2, feedback:"neutral"},
    {id:3, feedback:"bad"},
  ];

  onLeaveFeedback = (feedback)=>{
    
    this.setState(prevState => {
   
      if(prevState.hasOwnProperty(feedback)){
        // console.log(prevState[feedback]+1);
        return{
          feedback : prevState[feedback]+1,
          feedbackexist:true,
        }
       
      }
    }    
  
      
  );  
  }


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
        <Section title="Please, leave feedback">
          <FeedbackOptions options={this.feedbackOptions} onleaveFeedback={this.onLeaveFeedback}
           
          />
        </Section>
        <Section title="Statistics">
          {this.state.feedbackexist ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </Container>
    );
  }
}
