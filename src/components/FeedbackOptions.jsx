import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.css';

export default function FeedbackOptions({ buttons, handleBtnClick }) {
  return (
    <div className={s.thumb}>
      {buttons &&
        buttons.map(el => {
          return (
            <button
              key={el}
              className={s.button}
              name={el}
              onClick={e => handleBtnClick(e.currentTarget.name)}
            >
              {el}
            </button>
          );
        })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
