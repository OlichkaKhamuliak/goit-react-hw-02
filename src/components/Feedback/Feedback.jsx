import css from './Feedback.module.css';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { RiEmotionNormalLine } from 'react-icons/ri';
import { FaRegSadCry } from 'react-icons/fa';

export const Feedback = ({ feedbackTypes, totalFeedback, positiveFeedbackPercentage }) => {
  const getPositiveColor = () => {
    const percentage = Number(positiveFeedbackPercentage);

    if (percentage > 50) {
      return {
        className: css.green,
        imageComponent: <BiHappyHeartEyes className={css.icon} />,
      };
    } else if (percentage === 50) {
      return {
        className: css.orange,
        imageComponent: <RiEmotionNormalLine className={css.icon} />,
      };
    } else {
      return {
        className: css.red,
        imageComponent: <FaRegSadCry className={css.icon} />,
      };
    }
  };

  const { className, imageComponent } = getPositiveColor();

  return (
    <div className={css.wrap}>
      <div className={css.feedback}>
        <p className={css.good}>Good: {feedbackTypes.good}</p>
        <p className={css.neutral}>Neutral: {feedbackTypes.neutral}</p>
        <p className={css.bad}>Bad: {feedbackTypes.bad}</p>
      </div>
      <div className={css.total}>
        <p className={css.total}>Total: {totalFeedback}</p>
        <p className={className}>
          Positive: {positiveFeedbackPercentage}% {imageComponent}
        </p>
      </div>
    </div>
  );
};
