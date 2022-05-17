import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Title from './components/title';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import data from './data/options.json';

class App extends Component {
  state = {};

  componentDidMount() {
    data.map(({ name }) => this.setState({ [name]: 0 }));
  }

  onIncrement = name => {
    this.setState(st => {
      return { [name]: st[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section>
          <Title title="Plaese leave feedba" />
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onIncrement}
          />
        </Section>
        <Section>
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default App;
