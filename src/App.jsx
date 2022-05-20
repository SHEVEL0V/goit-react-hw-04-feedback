import React, { useState } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Title from './components/title';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import data from './data/options.json';

export default function App() {
  const state = {};
  data.map(el => {
    return (state[el.name] = 0);
  });
  const [options, setOptions] = useState(state);
  const buttons = Object.keys(options);
  const { good, neutral, bad } = options;
  const increment = 1;

  const handleBtnClick = key => {
    setOptions(preOptions => ({ ...preOptions, [key]: preOptions[key] + increment }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section>
        <Title title="Plaese leave feedba" />
        <FeedbackOptions buttons={buttons} handleBtnClick={handleBtnClick} />
      </Section>
      <Section>
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </>
  );
}
