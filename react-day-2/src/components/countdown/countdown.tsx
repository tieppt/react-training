import React from 'react';

interface CountdownState {
  current: number;
}

export class Countdown extends React.Component<{}, CountdownState> {
  state = {
    current: 10,
  };

  id?: number;

  start = () => {
    this.id = window.setInterval(() => {
      console.log('ddd');
      if (this.state.current <= 0) {
        clearInterval(this.id);
        return;
      }
      this.setState((state) => {
        if (state.current > 0) {
          return {
            current: state.current - 1,
          };
        }
      });
    }, 1000);
  };

  pause = () => {
    clearInterval(this.id);
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    const { current } = this.state;
    return (
      <>
        <button onClick={this.start}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <div>{current}</div>
      </>
    );
  }
}
