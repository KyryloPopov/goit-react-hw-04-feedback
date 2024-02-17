import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = ['Good', 'Neutral', 'Bad'];

  countTotalFeedback = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positivePercent = (this.state.good * 100) / total;
    return Math.round(positivePercent);
  };

  handleClick = event => {
    const stat = event.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [stat]: prevState[stat] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.handleClick}
        />
        <h2>stats</h2>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
