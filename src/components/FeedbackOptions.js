const FeedbackOptions = ({ clickGood }) => {
  return (
    <div>
      <button type="button" onClick={clickGood} id="good">
        good
      </button>
      <button type="button" onClick={clickGood} id="neutral">
        neutral
      </button>
      <button type="button" onClick={clickGood} id="bad">
        bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
