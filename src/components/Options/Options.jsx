import css from './Options.module.css';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { RiEmotionNormalLine } from 'react-icons/ri';
import { FaRegSadCry } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';

const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className={css.button}>
      {children}
    </button>
  );
};

export const Options = ({ handleFeedbackTypeChange, handleReset, hasFeedback }) => {
  return (
    <div className={css.container}>
      <Button handleClick={() => handleFeedbackTypeChange('good')}>
        Good <BiHappyHeartEyes className={css.icon} />
      </Button>
      <Button handleClick={() => handleFeedbackTypeChange('neutral')}>
        Neutral <RiEmotionNormalLine className={css.icon} />
      </Button>
      <Button handleClick={() => handleFeedbackTypeChange('bad')}>
        Bad <FaRegSadCry className={css.icon} />
      </Button>
      {hasFeedback && (
        <Button handleClick={handleReset}>
          Reset <BiReset className={css.icon} />
        </Button>
      )}
    </div>
  );
};
