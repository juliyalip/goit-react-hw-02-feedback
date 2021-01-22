import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total} </li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
