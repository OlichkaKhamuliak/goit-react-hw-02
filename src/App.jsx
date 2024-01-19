import { useState } from 'react';
import './App.css';
import { Description } from './components/Description';
import { Options } from './components/Options';
import { Feedback } from './components/Feedback';
import { Notification } from './components/Notification';

export const App = () => {
  const [feedbackTypesCount, setFeedbackTypesCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackTypeChange = type => {
    setFeedbackTypesCount(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedbackTypesCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = feedbackTypesCount;

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = Math.round(((good + neutral) / totalFeedback) * 100);

  const hasFeedback = totalFeedback > 0;

  return (
    <div>
      <Description />
      <Options
        handleFeedbackTypeChange={handleFeedbackTypeChange}
        handleReset={handleReset}
        hasFeedback={hasFeedback}
      />
      {hasFeedback ? (
        <Feedback
          feedbackTypes={feedbackTypesCount}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
      {/* <p> Total: {good + neutral + bad}</p> */}
    </div>
  );
};
