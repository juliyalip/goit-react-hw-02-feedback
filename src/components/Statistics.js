const Statistics = ({ prop, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {prop.good}</li>
      <li>Neutral: {prop.neutral}</li>
      <li>Bad: {prop.bad}</li>
      <li>Total: {total} </li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;
