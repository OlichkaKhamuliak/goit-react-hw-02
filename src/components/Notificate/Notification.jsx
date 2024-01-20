import css from './Notification.module.css';
import { TbMoodSadSquint } from 'react-icons/tb';

export const Notification = ({ message }) => {
  return (
    <div className={css.message}>
      <p>
        {message} <TbMoodSadSquint className={css.icon} />
      </p>
    </div>
  );
};
