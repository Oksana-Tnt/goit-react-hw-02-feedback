import React from 'react';
import { Button, ButtonList } from './FeedbackOptions.styled';


export const FeedbackOptions = ({options, onleaveFeedback})=> (
   
  <>
   
    <ButtonList>
      {options.map(({id, feedback})=>(
      <li>
        <Button key={id} onClick={()=>onleaveFeedback(feedback)}>{feedback}</Button>
      </li>)
      )}     
      
    </ButtonList>
  </>
);
