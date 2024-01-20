import css from './Options.module.css';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { RiEmotionNormalLine } from 'react-icons/ri';
import { FaRegSadCry } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';

const Button = ({ handleClick, children, type }) => {
  return (
    <button onClick={handleClick} className={`${css.button} ${type ? css[type] : ''}`}>
      {children}
    </button>
  );
};

export const Options = ({ handleFeedbackTypeChange, handleReset, hasFeedback }) => {
  return (
    <div className={css.container}>
      <Button handleClick={() => handleFeedbackTypeChange('good')} type="good">
        Good <BiHappyHeartEyes className={css.icon} />
      </Button>
      <Button handleClick={() => handleFeedbackTypeChange('neutral')} type="neutral">
        Neutral <RiEmotionNormalLine className={css.icon} />
      </Button>
      <Button handleClick={() => handleFeedbackTypeChange('bad')} type="bad">
        Bad <FaRegSadCry className={css.icon} />
      </Button>
      {hasFeedback && (
        <Button handleClick={handleReset} type="reset">
          Reset <BiReset className={css.icon} />
        </Button>
      )}
    </div>
  );
};
