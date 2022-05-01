import React, { useState } from 'react';
import Statistics from './statistics';
import Section from './title';
import FeedbackOptions from './button';
import options from '../options.json';

export default function Feadbacks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onIncrement = name => {
    if (name === 'good') {
      setGood(state => state + 1);
    }
    if (name === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (name === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Section title="Plaese leave feedba">
      <FeedbackOptions options={options} onLeaveFeedback={onIncrement} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </Section>
  );
}
