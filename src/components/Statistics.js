import React from 'react';
import Notification from './Notification';

const Statistics = ({ prop, total, positivePercentage }) => {
  return (
    <>
      {total > 0 ? (
        <ul>
          <li>Good: {prop.good}</li>
          <li>Neutral: {prop.neutral}</li>
          <li>Bad: {prop.bad}</li>
          <li>Total: {total} </li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;
