import { useState, useEffect } from 'react';
import './App.css';
import { Description } from './components/Description/Description';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Notification } from './components/Notificate/Notification';

export const App = () => {
  const [feedbackTypesCount, setFeedbackTypesCount] = useState(() => {
    const savedType = window.localStorage.getItem('typeCount');
    if (savedType !== null) {
      return JSON.parse(savedType);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
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

  useEffect(() => {
    window.localStorage.setItem('typeCount', JSON.stringify(feedbackTypesCount));
  }, [feedbackTypesCount]);

  const { good, neutral, bad } = feedbackTypesCount;

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = Math.round(((good + neutral) / totalFeedback) * 100);

  const hasFeedback = totalFeedback > 0;

  return (
    <div className="content">
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
    </div>
  );
};
