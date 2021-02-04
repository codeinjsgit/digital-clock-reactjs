import React, { Component } from "react";
import logo from "../../logo.svg";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    this.timer = setInterval(() => this.setState({ date: new Date() }));
  }

  stop() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const [day, month, date] = this.state.date.toString().split(' ');
    return (
      <div className="clock">
        <div className="wrap">
          <div className="clock-div">
            <div className="day">
              <span className="day-span">{day}, {month} {date}</span>
            </div>
            <div className="time">
              <span className="time-span">{this.state.date.toLocaleTimeString()}</span>
            </div>
            <div className="img-div">
              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
