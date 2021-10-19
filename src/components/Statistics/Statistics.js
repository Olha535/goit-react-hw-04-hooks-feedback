import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className>
      <li className={`list ${s.item}`}>
        <span className={s.title}>Good:</span>
        <p className={s.text}>{good}</p>
      </li>
      <li className={`list ${s.item}`}>
        <span className={s.title}>Neutral:</span>
        <p className={s.text}>{neutral}</p>
      </li>
      <li className={`list ${s.item}`}>
        <span className={s.title}>Bad:</span>
        <p className={s.text}>{bad}</p>
      </li>
      <li className={`list ${s.item}`}>
        <span className={s.title}>Total:</span>
        <p className={s.text}>{total}</p>
      </li>
      <li className={`list ${s.item}`}>
        <span className={s.title}>Positive feedback:</span>
        <p className={s.text}>{positivePercentage} %</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
