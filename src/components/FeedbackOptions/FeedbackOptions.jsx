import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Array.isArray(options) &&
        options.map(option => {
          return (
            <button
              className={css.option}
              onClick={onLeaveFeedback}
              key={option}
            >
              {option}
            </button>
          );
        })}
    </div>
  );
};
