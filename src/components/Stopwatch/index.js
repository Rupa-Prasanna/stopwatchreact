// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: '00', seconds: '00'}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  onStart = () => {
    this.timerId = setInterval(this.timer, 1000)
  }

  timer = () => {
    const {seconds, minutes} = this.state
    if (parseInt(seconds) < 59) {
      if (parseInt(seconds) >= 9) {
        this.setState(prev => ({seconds: parseInt(prev.seconds) + 1}))
      } else {
        this.setState(prev => ({
          seconds: '0'.concat(parseInt(prev.seconds) + 1),
        }))
      }
    } else {
      this.setState(prev => ({
        minutes:
          parseInt(minutes) >= 9
            ? parseInt(prev.minutes) + 1
            : '0'.concat(parseInt(prev.minutes) + 1),
        seconds: '00',
      }))
    }
  }

  onPause = () => {
    clearInterval(this.timerId)

    this.setState(prev => ({seconds: prev.seconds, minutes: prev.minutes}))
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({seconds: '00', minutes: '00'})
  }

  render() {
    const {seconds, minutes} = this.state
    return (
      <div className="bg-container">
        <h1> Stopwatch </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          alt="stopwatch"
        />
        <p> Timer </p>
        <h1>
          {minutes} : {seconds}
        </h1>

        <div className="button-container">
          <button type="button" className="green" onClick={this.onStart}>
            {' '}
            Start{' '}
          </button>
          <button type="button" className="red" onClick={this.onPause}>
            {' '}
            Stop{' '}
          </button>
          <button type="button" className="orange" onClick={this.onReset}>
            {' '}
            Reset{' '}
          </button>
        </div>
      </div>
    )
  }
}
export default Stopwatch
