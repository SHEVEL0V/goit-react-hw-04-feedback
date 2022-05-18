import React, { useState, useEffect } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Title from './components/title';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import data from './data/options.json';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [buttons, setButtons] = useState();

  useEffect(() => {
    setButtons(data.map(({ name }) => name));
  }, []);

  const increment = 1;

  const onIncrement = name => {
    switch (name) {
      case 'good':
        setGood(preG => preG + increment);

        break;
      case 'neutral':
        setNeutral(preN => preN + increment);
        break;
      case 'bad':
        setBad(preB => preB + increment);
        break;

      default:
        break;
    }
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
        <FeedbackOptions options={buttons} onLeaveFeedback={onIncrement} />
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
