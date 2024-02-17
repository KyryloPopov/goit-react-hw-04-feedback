import React from 'react';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h3 className={css.statistic}>Good: {good}</h3>
      <h3 className={css.statistic}>Neutral: {neutral}</h3>
      <h3 className={css.statistic}>Bad: {bad}</h3>
      <h3 className={css.statistic}>Total: {total}</h3>
      <h3 className={css.statistic}>
        Positive feedback: {positivePercentage}%
      </h3>
    </div>
  );
};
