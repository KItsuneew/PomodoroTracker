import React from 'react'
import '../App.css';
import BreakInterval from './breakeInterval';
import SessionLength from './sessionLength';
import Timer from './time';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      breakLength: 10,
      sessionLength: 25,
      timerMinute: 25,
      sessionText: 'Session Length',
      breakeText: 'Break Length',
    }
    this.onIncreaseBreakInterval = this.onIncreaseBreakInterval.bind(this);
    this.onDecreaseBreakInterval = this.onDecreaseBreakInterval.bind(this);
    this.onIncreaseTime = this.onIncreaseTime.bind(this);
    this.onDecreaseTime = this.onDecreaseTime.bind(this);
    this.onUpdateTimer = this.onUpdateTimer.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
  }

  onIncreaseBreakInterval() {
    this.setState((prev) => {
      return {
        breakLength: prev.breakLength + 5
      }
    })
  }

  onDecreaseBreakInterval() {
    this.setState((prev) => {
      return {
        breakLength: prev.breakLength - 1
      }
    })
  }

  onIncreaseTime() {
    this.setState((prev) => {
      return {
        sessionLength: prev.sessionLength + 5,
        timerMinute: prev.sessionLength + 5,
      }
    })
  }

  onDecreaseTime() {
    this.setState((prev) => {
      return {
        sessionLength: prev.sessionLength - 1,
        timerMinute: prev.sessionLength - 1
      }
    })
  }

  onUpdateTimer() {
    this.setState((prev) => {
      return {
        timerMinute: prev.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {

    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    }
    else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }

  }

  render() {
    return (
      <main>
        <h1 className='title'>Pomodoro Track Time</h1>
        <section className='section__middle'>
          <BreakInterval currentBreak={this.state.breakLength} breakeText={this.state.breakeText} increaseBreak={this.onIncreaseBreakInterval} decreaseBreak={this.onDecreaseBreakInterval} />
          <SessionLength currentTime={this.state.sessionLength} sessionText={this.state.sessionText} incTime={this.onIncreaseTime} decTime={this.onDecreaseTime} />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakTime={this.state.breakLength}
          UpdateTimer={this.onUpdateTimer}
          ToggleInterval={this.onToggleInterval}
        />
      </main >
    );
  }
}

export default App;
