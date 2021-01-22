import s from './feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul className={s.container}>
      {options.map(option => (
        <li className={s.buttonList} key={option}>
          <button type="button" onClick={() => onClick(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
