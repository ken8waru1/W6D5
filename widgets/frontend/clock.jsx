import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    let date = this.state.date;
    return (
      <div className="clock">
        <h1>Clock</h1>
        <p>
          <span>Time:</span>
          <span>{date.getHours().toString() + ':' + date.getMinutes().toString() + ':' + date.getSeconds().toString()}</span>
        </p>
        <p>
          <span>Date:</span> 
          <span>{(1 + date.getMonth()).toString() + '-' + date.getDate().toString() + '-' + date.getFullYear().toString()}</span>
        </p>
      </div>
    );
  }

  tick() {
    this.setState({ date: new Date() })
  }

  componentDidMount() {
    this.updateTimer = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.updateTimer)
  }
}

export default Clock;