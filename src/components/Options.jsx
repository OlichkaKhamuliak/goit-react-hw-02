const Button = ({ handleClick, children }) => {
  return <button onClick={handleClick}>{children}</button>;
};

export const Options = ({ handleFeedbackTypeChange, handleReset, hasFeedback }) => {
  return (
    <div>
      <Button handleClick={() => handleFeedbackTypeChange('good')}>Good</Button>
      <Button handleClick={() => handleFeedbackTypeChange('neutral')}>Neutral</Button>
      <Button handleClick={() => handleFeedbackTypeChange('bad')}>Bad</Button>
      {hasFeedback && <Button handleClick={handleReset}>Reset</Button>}
    </div>
  );
};
