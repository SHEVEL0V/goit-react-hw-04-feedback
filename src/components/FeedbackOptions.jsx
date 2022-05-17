import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.css';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (
    <div className={s.thumb}>
      {options.map(el => {
        return (
          <button
            key={el}
            className={s.button}
            name={el}
            onClick={e => onLeaveFeedback(e.currentTarget.name)}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
