import { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hangleAdd = ev => {
    if (ev.target.id === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (ev.target.id === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (ev.target.id === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const positive = Math.round(
      (100 * this.state.good) / this.countTotalFeedback(),
    );
    return positive;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions clickGood={this.hangleAdd} />
        </Section>

        <Statistics
          prop={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
